import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import OperatingHours from './OperatingHours';
import Review from './Review'



function ViewHotel() {
  const params = useParams()
  // console.log("params are", params);

  const [hotel, setHotel] = useState([])



  const HotelList = async () => {

    await fetch('/restaurants.json').then(data => data.json()).then(result => {
      setHotel(result.restaurants)


    })

  }
  // console.log("hotels", hotel);


  // console.log(view.photograph);




  useEffect(() => {
    HotelList()
  }, [])


  let ViewDetails = hotel.find(item =>
    item.id == params.id
  )

  

  return (
    <>
      {

        ViewDetails ? (<Row>
          <Col className='ms-2 mt-3'style={{marginLeft:"100px"}}>

            <img src={ViewDetails.photograph} alt="" className='p-5' style={{height:"700px",width:"500px",marginLeft:"20px",borderRadius:"65px"}} />
          </Col>
          <Col className='mt-5' style={{marginLeft:"80px",marginTop:"120px"}}>
          <h1>{ViewDetails.name}</h1>
          <h2>{ViewDetails.neighborhood}</h2>
          <h3>cuisine:{ViewDetails.cuisine_type}</h3>
          <h3>address:{ViewDetails.address}</h3>
          {/* <button style={{border:"none",borderRadius:"12px"}} className='p-2'>Operating Hours</button>
          <button style={{border:"none",borderRadius:"12px"}}className='m-2 p-2'>Coustomer Review</button> */}
           <div style={{display:"flex",flexDirection:"column"}}>
             <OperatingHours TimeData={ViewDetails.operating_hours}
             
             />
             <Review Review={ViewDetails.reviews}
             />
           </div >
          </Col>

        </Row>
       
        ) : "null"
      }
      



    </>
  )
}

export default ViewHotel