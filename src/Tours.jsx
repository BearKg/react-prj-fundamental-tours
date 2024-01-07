import React from 'react'
import Tour from './Tour'
import { useState, useEffect } from 'react'
import Loading from './Loading'

const Tours = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeItem = (id) => {
    const data = tours.filter((tour) => tour.id !== id)
    setTours(data)
  }
  const refetchItems = async () => {
   try {
     const response = await fetch(url)
     const tours = await response.json()
     setTours(tours)
   } catch (error) {
     console.log(error)
   }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const tours = await response.json()
        setTours(tours)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (isLoading) return <Loading/>

  return (
    <>
      {tours.length ? (
        <section>
          <div className="title">
            <h2>our tours</h2>
            <div className="title-underline"></div>
          </div>
          <div className="tours">
            {tours.map((tour) => {
              return <Tour key={tour.id} removeItem={removeItem} {...tour} />
            })}
          </div>
        </section>
      ) : (
        <section
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div className="title">
            <h2>no tours left</h2>
            <div className="title-underline"></div>
          </div>
          <button className="btn" style={{marginTop:'1rem'}} onClick={refetchItems}>refresh</button>
        </section>
      )}
    </>
  )
}

export default Tours
