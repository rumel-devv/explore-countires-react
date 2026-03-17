import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countires.css'
const Countires = ({countriesPromise}) => {

    const [visitedCountires,setVisitedCountries] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([])
    
    const handleVisitedCountires = (country) => {
        // console.log("handle visited Country",country);
        const newVisitedCountires = [...visitedCountires,country]
        setVisitedCountries(newVisitedCountires)
    }

    const handleVisitedFlags = (flag) =>{
        // console.log("Visited flags",flag);
        const newFlags = [...visitedFlags,flag]
        setVisitedFlags(newFlags)
    }

    const countriesData = use(countriesPromise)
    const Countires = countriesData.countries
    // console.log(Countires);
    return (
        <div>
          <h1>Total Countires {Countires.length}</h1>
          <p>Total Visited Countries {visitedCountires.length}</p>
          <ol>
            {visitedCountires.map(conrt  => <li key={conrt.cca3.cca3}>  {conrt.name.common}</li>)}
          </ol>
          <div className='flag-design'>
            {visitedFlags.map((flag,index) => <img key={index} src={flag} ></img>)}
          </div>
         <div  className='grid' >
            {
     Countires.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountires= {handleVisitedCountires} handleVisitedFlags={handleVisitedFlags} ></Country>)
         }
         </div>
        </div>
    );
};

export default Countires;