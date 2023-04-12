import React from 'react'
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OperatingHours({TimeData}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
     <>
     <Row>
         <Col>
              <Button style={{height:"40px",width:"200px",borderRadius:"8px" ,display:"flex",justifyContent:"center",alignItems:"center" }} variant="primary" onClick={handleShow}>
                Operating Time
              </Button>
        
              <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton >
                  <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body >
        
             <ListGroup >
              <ListGroup.Item>Monday|{TimeData.Monday}</ListGroup.Item>
              <ListGroup.Item>Tuesday|{TimeData.Tuesday}</ListGroup.Item>
              <ListGroup.Item>Wednesday|{TimeData.Wednesday}</ListGroup.Item>
              <ListGroup.Item>Thursday|{TimeData.Thursday}</ListGroup.Item>
              <ListGroup.Item>Friday|{TimeData.Friday}</ListGroup.Item>
              <ListGroup.Item>Saturday|{TimeData.Saturday}</ListGroup.Item>
              <ListGroup.Item>Sunday|{TimeData.Sunday }</ListGroup.Item>
            </ListGroup>
        
            </Modal.Body>
                
              </Modal>
         </Col>
     </Row>
    </>
    
  )
}

export default OperatingHours