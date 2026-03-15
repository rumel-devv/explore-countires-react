import React, { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountires,handleVisitedFlags}) => {
   const currency = Object.values(country.currencies.currencies)[0]
   const language = Object.values(country.languages.languages)[0]
  const [visited,setVisited] = useState(false)

   const handleVisited = () => {
    // if(visited){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }
    setVisited(!visited)
    handleVisitedCountires(country)
    
   }
   const handleFlags = (flag) => {
    handleVisitedFlags(country.flags.flags.png)
   }
  
    return (
        <div className={`card ${visited ? 'visited-style':"Not visited"}`}>
             <img className='img' src={country.flags.flags.png} alt={country?.flags?.flags?.alt}  ></img>
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population} </p>
            <p>Currency: {currency?.name}</p>
             <p>Language: {language} </p>
             <p>Area: {country.area.area} {
             country.area.area < 30000 ? "Samll Country" : "Big Country"} 
             </p>
             <button onClick={handleVisited} className='btn' >
                {visited? "Visited": "Not Visited"}
                </button>
           <button onClick={handleFlags} className='btn' >Add Visited Flags</button>

        </div>
    );
};

export default Country;