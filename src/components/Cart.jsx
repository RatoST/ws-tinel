import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import _ from 'lodash';
import '../App.css';
import arrow from '../images/arrow.png';

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
      <div>
        <table>
          <thead>
            <tr>
              <th>Workshop</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total price</th>
            </tr>
          </thead>
          <tbody>
            {addWorkshop.length > 0 ? (
              addWorkshop.map((workshop) => (
                <tr key={workshop.id}>
                <td>{workshop.title}</td>
                <td>{formatPrice(workshop.price)}</td>
                <td>{workshop.quantity}</td>
                <td>{totalPrice(workshop.price, workshop.quantity)}</td>
              <td>
              <button onClick={()=>(workshop.quantity > 0) ? workshop.quantity - 1 : null }>-</button>
              <span>Quantity</span>
              <button onClick={()=> workshop.quantity + 1}>+</button>
              </td>
              <td>
                <Button variant="warning" onClick={()=> deleteWorkshop(workshop.id)}>Delete</Button>
              </td>
                </tr>
              ))
            ) : ( 
              <tr>
                <td colSpan={3}>Cart is empty</td>
              </tr>
            )}
            
          </tbody>
        </table>
        <div>
         {addWorkshop.length > 0 ? (<Link to="/cart/checkoutForm"><Button variant="warning">Checkout</Button></Link>) : null}
        </div>
      </div>
      </div>
    </div>
    </>      
  )
}

export default Cart;
