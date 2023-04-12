import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <Row>
      <Col xm={12} sm={12} >
        <Navbar style={{backgroundColor:"#252836",height:"80px"}}  variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={require('../images.png')}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Col >
    </Row>
  )
}

export default Header