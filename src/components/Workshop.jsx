import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import _ from 'lodash';
import '../App.css';

import clock from '../images/eva_clock.png';
import calendar from '../images/calendar.png';

const Workshop = ({item, addWorkshop, setAddWorkshop }) => {

  const formatPrice = (price) => {
    return price && _.isNumber(price) ? `${(price).toFixed(2)} EUR`:
      null;
    }
  
    const cartArray = [
      { 
        id: item.id,
        image: item.image,
        title: item.title,
        price: item.price,
        quantity: 1,
      }
    ]; 
    
    const handleAdd = (event) => {
      event.preventDefault();
      setAddWorkshop([...addWorkshop, cartArray]);
      // setAddWorkshop(cartArray);
    }

  return(
    <div className="dictionary">
      <Card className="term" key={item.id}>
        <Link to={`/workshops/${item.id}`}>
          <Card.Img variant="top" src={item.image}/>
            <span><img className="cardIcon" src={item.catIcon} alt="icon" width={20}/></span>
        </Link>
        <Card.Body>
          <h6 className="dateText"><span><img src={calendar} alt="cal" width={15}/> {item.date} </span>
          <span><img src={clock} alt="clo" width={15}/> {item.time} </span></h6>
          <Link to={`/workshops/${item.id}`}>
          <Card.Title><h4 type="text" name="title" className="cardTitle">{item.title}</h4></Card.Title>
          </Link>
          <Card.Text><span type="text" name="price"  className="price">{formatPrice(item.price)}</span></Card.Text>
          <Button onClick={handleAdd} variant='warning'>Add to Cart</Button>   
        </Card.Body>
      </Card>
    </div>

  )
}
export default Workshop;
