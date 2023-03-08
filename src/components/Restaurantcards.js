import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restaurantcards({restaurant}) {
    console.log(restaurant);
  return (
    <div> 
      <Link style={
        {
          color: 'white',
          textDecoration: 'none',}
      } to={`/Viewrestaurant/${restaurant.id}`}>  <Card className='m-3'>
    <Card.Img variant="top" className='p-4' src={restaurant.photograph} />
    <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>
        {restaurant.neighborhood} <br/>
      </Card.Text>
      
    </Card.Body>
  </Card>
  </Link>
  </div>
  )
}

export default Restaurantcards