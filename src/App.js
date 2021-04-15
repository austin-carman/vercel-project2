import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import PhotoToday from './components/PhotoToday'
import Description from './components/Description'
import PhotoTitle from './components/PhotoTitle'



function App() {
  const [dataSet, setDataSet] = useState(null);
  const [heading, setHeading] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [explanation, setExplanation] = useState(null);
  const [date, setDate] = useState(null);
  const [copyRight, setCopyRight] = useState(null);

  useEffect (() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((res) => {
        setDataSet(res.data);
        setHeading(res.data.title);
        setPhoto(res.data.hdurl);
        setExplanation(res.data.explanation);
        setDate(res.data.date);
        setCopyRight(res.data.copyright);
      })
      .catch((err) => {
        console.log('Error')
      })
  }, [])
  
  return (
    <div className="App">
      <h1>
        NASA Photo of the Day
      </h1>
      <PhotoTitle heading={heading} date={date}/>
      <PhotoToday photo={photo} />
      <Description explanation={explanation} copyRight={copyRight}/>
    </div>
  );
}

export default App;
