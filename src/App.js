import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import PhotoToday from './components/PhotoToday'
import Description from './components/Description'
import Heading from './components/PhotoTitle'


function App() {
  const [dataSet, setDataSet] = useState({});

  useEffect (() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=uWi7tx1SDcYee9XTL7jdBkFh5iL1eBQvlp5RJHGb')
      .then((res) => {
        setDataSet(res.data);
      })
      .catch((err) => {
        console.log('Error')
      })
  }, [])

  console.log(dataSet);
  
  return (
    <div className="App">
      <Heading />
      <PhotoToday heading={dataSet.title} date={dataSet.date} photo={dataSet.hdurl} />
      <Description explanation={dataSet.explanation} copyRight={dataSet.copyright}/>
    </div>
  );
}

export default App;
