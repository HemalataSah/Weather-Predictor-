import React from 'react'
import Navbar from './Navbar'
import 'react-slideshow-image/dist/styles.css'
import {Fade,Zoom, Slide} from "react-slideshow-image"
export default function About() {
 const slideImage= [
{url:'https://cdn.wallpapersafari.com/15/45/UbrRaM.jpg',caption:'Weather forecasts are made by collecting quantitative data about the current state of the atmosphere, land, and ocean and using meteorology to project how the atmosphere will change at a given place.'},
{url:'http://www.pixelstalk.net/wp-content/uploads/2016/07/Weather-Backgrounds-HD.jpg',caption:'There is a vast variety of end uses for weather forecasts. Weather warnings are important because they are used to protect lives and property. Forecasts based on temperature and precipitation are important to agriculture, and therefore to traders within commodity markets.'},
{url:'https://www.pixelstalk.net/wp-content/uploads/2016/07/Weather-Desktop-Wallpaper.jpg',caption:'On an everyday basis, many people use weather forecasts to determine what to wear on a given day. Since outdoor activities are severely curtailed by heavy rain, snow and wind chill, forecasts can be used to plan activities around these events, and to plan ahead and survive them.'},
];

const divStyle={
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  height:"90vh",
  backgroundSize:"cover"
}
const spanStyle={
  fontSize:"20px",
  background: "#efefef",
  color:"#000000"

}
  return (

    <>
    <Navbar/>
    <div className='Slide-Container'>
      <Fade>
          {slideImage.map((image, index)=>(
            <div key={index}>
              <div style={{...divStyle,backgroundImage:`url(${image.url})`}}>
                  <div style={{marginTop:"35vh",marginLeft:"10vw",marginRight:"10vw",marginBottom:"28vh",fontFamily:"monospace", fontWeight:"600",fontSize:"1.5rem", background:"black",opacity:"0.65",color:"white",alignItems:"center",padding:"30px"}}>{image.caption}</div>
              </div>
               
            </div>
          ))}
      </Fade>
    </div>  
    </>
   
  )
}
