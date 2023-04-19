"use client"
import React, { useEffect, useState } from 'react'

export default function CountryLookup() {
    const [country,setCountry]  =useState("United States1");
    const [ip, setIp] = useState('');
    const geoURL = "http://ip-api.com/json/"
    
    useEffect(()=>{
        async function fetchIp() {
            const response = await fetch('https://api.ipify.org/?format=json');
            const data = await response.json();
            console.log(data.ip)
            setIp(data.ip);
          }
         
          async function fetchCountry() {
           const response = await fetch(`${geoURL}${ip}`);
           const data = await response.json();
           setCountry(data.country) 
        }
        fetchIp();
        fetchCountry();
    },[])
    return (
        <>
    <div>{country},   IP: {ip}</div>
    </>
  )
}
// getting current IP
// CountryLookup.getInitialProps = async ({ req }) => {
//     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//     console.log(ip);
//     return { ip };
//   };


