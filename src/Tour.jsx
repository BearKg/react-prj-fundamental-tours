import React, { useState } from 'react'

const Tour = ({ id, name, info, image, price, removeItem }) => {
  const [expanded, setExpanded] = useState(false)
  const toggleExpand = () => {
    setExpanded(!expanded)
  }
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img"></img>
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {expanded ? info : `${info.slice(0, 100)}...`}
          <button className="info-btn" onClick={toggleExpand}>
            {expanded ? 'show less' : 'read more'}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => removeItem(id)}
        >
          not interested
        </button>
      </div>
    </article>
  )
}

export default Tour
