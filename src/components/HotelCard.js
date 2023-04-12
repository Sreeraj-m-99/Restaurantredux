import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function HotelCard({ data }) {
  // console.log("props", data);
  return (

    <    Col className='p-3' sm={12} md={6} lg={4} xl={3}>
      <Link style={{textDecoration:"none"}} to={`/view-hotel/${data.id}`}>

        <Card  className=' card text-center mt-4' style={{ width: '80%' ,border:"none",backgroundColor:"white"}}>
          <Card.Img className='p-2' variant="top" src={data.photograph} style={{ borderRadius:"12px" ,height:"350px"}}/>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.neighborhood}
            </Card.Text>

          </Card.Body>
        </Card>

      </Link>
    </Col>

  )
}

export default HotelCard