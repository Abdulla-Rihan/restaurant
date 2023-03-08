import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';

function Viewrestaurant() {
    const params=useParams();
    console.log(params.id);
    // to hold the value 



    const [allRestaurant,setRestaurants]=useState([])
    // funtion to call API to get all Restaurant information from restaurant.json
  
    const getRestaurant=async()=>{
      await fetch('/restaurants.json')
      .then((data)=>{
        data.json()
        .then((result)=>{
          // console.log(result);
          setRestaurants(result.restaurants)
  
  
        })
        
      })
    }
    
    useEffect(()=>{
      getRestaurant()
    },[])
    console.log(allRestaurant);

    const viewrest=allRestaurant.find(item=>item.id==params.id)
    console.log(viewrest);
  return (
    <>
    {
        viewrest?(
            <Row>
                <Col>
                <Image src={viewrest.photograph} fluid/>
                </Col>
                <Col>
                <p>{viewrest.id}</p>
                <h3>Name : {viewrest.name}</h3>
                <h4>Neighborhood : {viewrest.neighborhood}</h4>
                <h4>Address : {viewrest.address}</h4>
                <h4>Cuisine type : {viewrest.cuisine_type}</h4> <br/>
                <Restoperation operate={viewrest.operating_hours}/> <br/> <br/>
                <Restreview reviews={viewrest.reviews}/>

                </Col>
            </Row>
        ):'null'
    }
    </>
  )
}

export default Viewrestaurant