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

  useEffect (() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((res) => {
        setDataSet(res.data);
        setHeading(res.data.title);
        setPhoto(res.data.hdurl);
        setExplanation(res.data.explanation);
      })

      .catch((err) => {
        console.log('Error')
      })
  }, [])


  //why can't you do this?!
  // const photoheading = dataSet.title;



  return (
    <div className="App">
      <h1>
        NASA Photo of the Day
      </h1>
      <PhotoTitle heading={heading} />
      <PhotoToday photo={photo} />
      <Description explanation={explanation} />
    </div>
  );
}

export default App;
