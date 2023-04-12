import React from 'react'
import { useState,useEffect } from 'react';
import HotelCard from './HotelCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Hero() {
  const [hotel,setHotel]=useState([])

  const  HotelList= async ()=>{
   await fetch('/restaurants.json').then(data=>data.json()).then(result=>{
      setHotel(result.restaurants)
      

    })
  }
  // console.log(hotel);

  useEffect(()=>{
  HotelList()
  },[])

  return (
    <Row className='p-3'>
      {
        hotel.map(items=>
         <HotelCard data={items}
         />
          )
      }
    </Row>
  )
}

export default Hero