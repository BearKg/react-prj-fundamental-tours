import { useEffect, useState } from "react";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  return <main>
      <Tours url={url}/>  
  </main>
};
export default App;
