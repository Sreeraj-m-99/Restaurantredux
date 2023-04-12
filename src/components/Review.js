import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function Review({Review}) {
    const [open, setOpen] = useState(false);
  return (
    <>
     <Button style={{height:"40px",width:"200px",borderRadius:"8px" ,display:"flex",justifyContent:"center",alignItems:"center" ,marginTop:"10px"}}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Review
      </Button>
      <div style={{ minHeight: '150px' ,marginTop:"20px"}}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              {Review.map(item=>
              <div>
                  <h2>Name:{item.name} Date:{item.date}</h2>
                  <h3>Rating:{item.rating}</h3>
                  <p>Comments:{item.comments}</p>
                  <br />
              </div>
                )}
            </Card>
          </div>
        </Collapse>
      </div>

    </>
  )
}

export default Review