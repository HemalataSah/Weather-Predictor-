import React,{useState} from 'react'
import bg from "./../Images/clouds.jpg"
import Navbar from './Navbar';
import "./Modal.css";
export default function Home() {
    const myStyle = {
        backgroundImage:`url(${bg})`,
        height: "90vh",
        width: "100vw",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position:"absolute"
    };
    
    
    const blackBox = {
      backgroundColor:"black",
      height: "75vh",
      width:"80vw",
      opacity:0.7,
      position:"float",
      marginLeft: 150,
      marginTop: 55,
      // position:"absolute",
      border:"solid 3px white"
    };
    const Option={
      width:"35vh",
      height:"5vh",
      fontSize:"1.3rem",
      fontWeight:"700",
      fontFamily: "Arial, Helvetica, sans-serif",
      marginRight:"10vh"
    }
    const label={
      color:"white", 
      fontSize:"1.5rem",
      marginRight:"1vw"
      
    }
    
    const [Outlook, setOutlook] = useState();
    const [Temperature, setTemperature] = useState();
    const [Humidity, setHumidity] = useState();
    const [Wind, setWind] = useState();
    const [Play, setPlay] = useState("")
    const [Modal, setModal] = useState(false)
    

    const display=(e) =>{
      if(Outlook === "Sunny")
        {
          if(Humidity==="High")
              setPlay("No");
          else
              setPlay("Yes");
        }
      else if(Outlook === "Overcast")
        {setPlay("Yes"); }
      else
        {
          if(Wind ==="Strong")
            setPlay("No");
          else
           setPlay("Yes");
      
        }
        
        toggleModal();
        
    }

  function toggleModal() {
    setModal(!Modal)
  }


  return (
    <>
    <Navbar/>
<div style={myStyle}>
  
      <div className="container" style={blackBox}>
               <div className="details">
                  <h2 style={{color:"red",borderColor: "thistle",width:"fit-content",padding:"5px",textDecorationColor:"GrayText", marginLeft:"15vw",border:"1px solid grey"}}>WEATHER PREDICTOR</h2>
                  <div style={{marginLeft:"8vw",position:"absolute"}}>
                    {/* <h2>OUTLOOK : </h2> */}
                    <b style={label}>OUTLOOK : </b> <select id="Outlook" style={Option} value={Outlook} onChange={(e) => setOutlook(e.target.value)}>
                    <option value="Sunny">Sunny</option>
                    <option value="Overcast">Overcast</option>
                    <option value="Rain">Rain</option>
                  </select>
                  <b style={label}>TEMPERATURE : </b> <select id="Temperature" style={Option} value={Temperature} onChange={(e) => setTemperature(e.target.value)}>
                    <option value="Hot">Hot</option>
                    <option value="Mild">Mild</option>
                    <option value="Cool">Cool</option>
                  </select>
                  <br />
                  <b style={{color:"white",fontSize:"1.5rem",marginRight:"1vw"}}>HUMIDITY : </b> <select id="Humidity" style={Option} value={Humidity} onChange={(e) => setHumidity(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Normal">Normal</option>
                  </select>
                  <b style={{color:"white",fontSize:"1.5rem",marginRight:"1vw",marginLeft:"6vw"}}>WIND : </b> <select id="Wind" style={Option} value={Wind} onChange={(e) => setWind(e.target.value)}>
                    <option value="Weak">Weak</option>
                    <option value="Strong">Strong</option>
                  </select>
                  </div>
                  <button style={{backgroundColor: "#04AA6D", color: "white", padding: "15px 32px", textAlign: "center", textDecoration: "none",
  display: "inline-block",fontSize: "16px",width:"50%", marginTop:"200px",marginLeft: "20vw", border: "1px solid white",}} onClick={display}> <b>SUBMIT </b></button>
                {Modal && <div className="modal">
                  <div className="overlay" onClick={toggleModal}> </div>
                  <div className="modal-content">
                    <h4>Hello, On your service! </h4>
                    {Play==="Yes"&& <p style={{fontFamily:"monospace",fontSize:"25px"}}> You may play Cricket because the outside weather is going to be steady :) </p>}
                    {Play==="No"&& <p style={{fontFamily:"monospace",fontSize:"25px"}}> You can't play Cricket outside because of the poor weather :(</p>}
                  <button className='close-modal' onClick={toggleModal}>CLOSE</button>
                  </div>
                </div>}
                

               </div>           
    </div>
    

    </div>
    
    </>
  )
}
