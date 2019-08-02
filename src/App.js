import React from "react";
import{useEffect,useState} from 'react';
import "./App.css";
import axios from 'axios';


import Date from "./components/date";
import About from "./components/about";
import Media from "./components/media";
import Title from "./components/title";
import Footer from "./components/footer";

import styled from 'styled-components';

const AllDiv = styled.div`
    width: 100vw;
    heigh: 100vh;
`;

const WrapperDiv = styled.div`
    width: 100%;
    heigh: 100%;
    padding: auto;
    display: flex;
`;

const TextDiv = styled.div`
    width: 50vw;
    heigh: 33vh;
    margin: auto;
`;

const ImgDiv = styled.div`
    width: 50vw;
    heigh: 33vh;
    margin: auto;
`;




function App() {

  const [file, setFile] = useState();

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((stuff)=>{
        console.log(stuff.data);
        setFile(stuff.data);
      })
      .catch(error=>{
        console.log('Major Error Has Occurred', error);
      })
  }, []);

  let date = null;
  let about = null;
  let type = null;
  let url = null;
  let title = null;
  let copy = null;


  if(file){
    date = file.date;
    about = file.about;
    url = file.url;
    title = file.title;
    copy = file.footer;
    type = file.media_type;
    console.log(url);
  }



  return (

    <AllDiv>

      <WrapperDiv>
        <TextDiv>
          <Date date = {date}/>
          <Title title={title}/>
          <About about={about}/>
        </TextDiv>
        <ImgDiv>
          <Media type ={type} url={url}/>
          <Footer copy={copy}/>
        </ImgDiv>
      </WrapperDiv> 
    </AllDiv>
  );
}

export default App;
