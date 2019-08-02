import React from "react";
import {useEffect,useState} from "react";
import "./App.css";
import axios from 'axios';

import About from "./components/about";
import Date from "./components/date";
import Footer from "./components/footer";
import Media from "./components/media";

function App() {

const [file, setFile] = useState();

useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((info)=>{
      setFile(info.data);
      console.log(info.data);
    })
    .catch(error=>{
      console.log("major error");
    })
}, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
