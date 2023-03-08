import React,{useState} from 'react'
import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({reviews}) {
    console.log(reviews);
    const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-c
ontrols="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
                {
                  reviews.map(item=>(
                    <>
                    <p>{item.name} <span> {item.date} </span></p>
                    <h3>Rating : {item.rating}</h3>
                    <h6>Comments : {item.comments}</h6>
                    </>
                  ))
                }
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default Restreview