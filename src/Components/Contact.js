import React from 'react'
import Navbar from './Navbar'
import pic from "./../Images/pic.png"

export default function Contact() {
  return (
  <>
    <Navbar/>
    <div>
      <div className='Box' style={{margin:"10vh",height:"65vh",width:"50vw", border:"2px solid black",background:"#DAF177  ",fontfamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",borderStyle:"outset",position:"absolute"}}>
        <div style={{alignItems:"center",padding:"20px"}}><h1 style={{fontSize:"2.5rem", fontStyle:"inherit",marginLeft:"9vw",textTransform:"uppercase"}}>Contact OUR TEAM</h1>
        <br />
        The basic idea of numerical weather prediction is to sample the state of the fluid at a given time and use the equations of fluid dynamics and thermodynamics to estimate the state of the fluid at some time in the future. These are academic or governmental meteorology organizations. Most provide at least a limited forecast for their area of interest on their website.
        <br /> <br />
        {/* <b style={{fontSize:"1.5rem"}}>Emergency :  </b> If you have a medical emergency, call <a href="tel:911">911</a> immediately or go to the nearest hospital. */}
        <br />
        <b style={{fontSize:"1.5rem"}}>General Information : </b>
      
        <a href="tel:2348101234567">
        2348101234567
        </a>
          <br />
          <b style={{fontSize:"1.5rem"}}> Appointments : </b>
        <a href="sms:2348101234567">
        sms: 2348101234567
        </a>
        <br />
        <b style={{fontSize:"1.5rem"}}>Compliance Helpline : </b>
      
      <a href="tel:8101234567">
      8101234567
      </a>
      <br />
      <b style={{fontSize:"1.5rem"}}>Volunteer Services : </b>
      
        <a href="tel:2348101234567">
        9348101234567
        </a>
  </div>
      </div>
      <div style={{marginLeft:"60vw",marginTop:"2vh",height:"78vh",width:"35vw",position:"absolute",backgroundSize: "cover",
        backgroundRepeat: "no-repeat",}}><img src={pic} style={{width:"100%",height:"100%"}}/></div>
      
    </div>
    <div style={{marginTop:"81.5vh",width:"99.9%",height:"8vh",backgroundColor:"rgb(216, 218, 121)",position:"absolute",border:"1px solid black"}}><h3 style={{fontFamily:"cursive",marginLeft:"30vw"}} >© 2024 METEROLOGO COMPANY. All rights reserved.</h3></div>
  </>
    
  )
}
