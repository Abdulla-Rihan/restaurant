import React, { useEffect } from 'react'
import {useState} from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../Actions/restaurantlistAction';
import { useDispatch ,useSelector} from 'react-redux';
import { restaurantListReducer } from '../reducer/restaurantReducer';


function Restaurantlist() {
    //to hold the value
    const [allRestaurant,setRestaurant] = useState([])
    // function to call api to get all restaurant information from
    //restaurant.json
    // const getRestaurant=async()=>
    // {
    //     await fetch('./restaurants.json')
    //     .then((data)=>{
    //       data.json()
    //         .then((result)=>{
    //           // console.log(result);
    //           setRestaurant(result.restaurants)
    //         })
    //       })
    // } 
    // console.log(allRestaurant);
    const dispatch=useDispatch();
    const result=useSelector(state=>state.restaurantReducer)
    console.log(result);
    const {restaurantList}=result
    useEffect(()=>{
        // getRestaurant()
        dispatch(RestaurantListAction())

    },[])
 return (
    <Row>
      {
        restaurantList.map(item=>(
          // <h1>{item.name}</h1>
          <Col sm={12} md={6} lg={4} xl={3}>
          <Restaurantcards restaurant={item}/>
          </Col>
        ))
            
      }
    </Row>
  )
}

export default Restaurantlist