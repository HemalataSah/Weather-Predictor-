import React from 'react'
import "./VaccineStyles.css";
import forecst from "./../Images/forecast.jpg";
import Navbar from './Navbar';


export default function Tools() {
  return (
    <>
    <Navbar/>
     <div className="contact" style={{display:"flex", marginTop:"20px", marginLeft:"10px", marginBottom:"110px"}}> 
    <div className="card">
        <img src={forecst} alt="" height={"430px"} width={"550px"}/>
    
    </div>
    
    <div id="program"><h3>How do forecasters predict and what are the tools that they use?</h3>
    The people who study the weather and put together forecasts are scientists known as meteorologists. To get data from the seas and the upper atmosphere, data-collection tools and instruments may be attached to ships, airplanes, and even buoys in the middle of the ocean. 
    <ul>
    <li>
    Doppler Radar is the meteorologist’s window into observing severe storms. With 159 radar towers across the United States, NOAA’s National Weather Service has comprehensive coverage of the continental U.S.
    </li>
    <li>
    Weather Satellites monitor Earth from space, collecting observational data our scientists analyze. NOAA operates three types of weather satellites. <a href="https://www.ospo.noaa.gov/Operations/POES/index.html">Polar orbiting satellites</a> orbit the Earth close to the surface, taking six or seven detailed images a day.
    </li>
    <li>
    Radiosondes are our primary source of upper-air data. At least twice per day, radiosondes are tied to weather balloons and are launched in 92 locations across the United States. 
    </li>
    </ul></div>
     </div>
     <div>
     </div>

     <div id="bottom">
     Resources for Tribal & Indigenous Communities | Bipartisan Infrastructure Law (BIL) | Inflation Reduction Act (IRA) | Protecting Your Privacy | FOIA |  Information Quality | Accessibility | Guidance | Budget & Performance | Disclaimer | EEO | No-Fear Act |  USA.gov | Ready.gov | Employee Check-In | Staff Directory | Contact Us | Need Help? | COVID-19 hub for NOAA personnel 
     </div>
     
    
    </>
   

    

  )
}
