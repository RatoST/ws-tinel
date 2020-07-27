import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import '../App.css';
import arrow from '../images/arrow.png';
import trash from '../images/trash.png'

const Cart = ({ workshops, deleteWorkshop }) => {

  const [quantity, setQuantity] = useState()

  const formatPrice = (price) => {
    return price && _.isNumber(price) ? `${(price).toFixed(2)} EUR`:
      null;
    }

  const totalPrice = (price, quantity) => {
    return price && _.isNumber(price) ? `${((price*quantity)).toFixed(2)} EUR`:
      null;
    }

    
  const increase = () => {
    setQuantity(quantity + 1);
  }

  const decrease = () => {
    setQuantity(quantity - 1);
  }


  return (
    <>
    <div className="row">
      <div className="column left">
        <Link to="/"><h6 className="backLink"><img className="arrow" src={arrow} alt="arrow" /> Back</h6></Link>
      </div>
      <div className="column right">
      <h2 className="listTitle">Cart</h2>      
      {workshops.length > 0 ? (
        workshops.map((workshop) => (
          <div key={workshop.id}>
            <Card className="card-cart">
              <Card.Img className="card-img-left" variant="top" src={workshop.image}/>
              <Card.Body>
                <Card.Title className="card-cart-title"><h4 className="cardTitle">{workshop.title}</h4></Card.Title>
                <tr className="priceCell">
                  <td>
                    <Card.Text className="price card-cart-text">{formatPrice(workshop.price)}</Card.Text>
                  </td>
                  <td></td>
                  <td>
                    <Button variant="warning" className="cartDelete" onClick={()=> deleteWorkshop(workshop.id)}><img className="deleteIcon" src={trash} alt="icon" /></Button>
                  </td>
                </tr>
                <tr className="quantityCell">
                  <td className="cart-subotal">SUBTOTAL:{formatPrice(workshop.price * workshop.quantity)}</td>
                  <td>
                    <Button variant="warning" className="buttonQty" onClick={()=>(workshop.quantity > 0) ? decrease : null }>-</Button>
                  </td>
                  <td>
                    <Card.Text className="card-cart-text">{workshop.quantity}</Card.Text>
                  </td>
                  <td>
                    <Button variant="warning" className="buttonQty" onClick={increase}>+</Button>
                  </td>
                  </tr>
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
        <div>
            {totalPrice}
          {workshops.length > 0 ? (<Link to="/cart/checkoutForm"><Button className="checkOutBtn" variant="warning">Checkout</Button></Link>) : null}    
        </div>
      </div>
    </div>
    </>      
  )
}

export default Cart;
