import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import _ from 'lodash';
import '../App.css';
import arrow from '../images/arrow.png';
import { Card } from 'react-bootstrap';

const Cart = ({ addWorkshop, deleteWorkshop }) => {

  const formatPrice = (price) => {
    return price && _.isNumber(price) ? `${(price).toFixed(2)} EUR`:
      null;
    }

  const totalPrice = (price, quantity) => {
    return price && _.isNumber(price) ? `${((price*quantity)).toFixed(2)} EUR`:
      null;
    }

  return (
    <>
    <div className="row">
      <div className="column left">
        <Link to="/"><h6 className="backLink"><img className="arrow" src={arrow} alt="arrow" /> Back</h6></Link>
      </div>
      <div className="column right">
      <h2 className="listTitle">Cart</h2>      
      {addWorkshop.length > 0 ? (
        addWorkshop.map((workshop) => (
          <div key={workshop.id}>
            <Card>
              <Card.Img variant="left" src={workshop.image}/>
              <Card.Body>
                <Card.Title>{workshop.title}</Card.Title>
                <Card.Text>{formatPrice(workshop.price)}</Card.Text>
              </Card.Body>
            </Card>         
          </div>
        ))
          ) : ( 
        <div>
          <Card>
            <Card.Title>Cart is empty</Card.Title>
          </Card>
        </div>    
              )}  
          {addWorkshop.length > 0 ? (<Link to="/cart/checkoutForm"><Button variant="warning">Checkout</Button></Link>) : null}    
      </div>
    </div>
    </>      
  )
}

export default Cart;
