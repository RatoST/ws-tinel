import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../App.css';
import arrow from '../images/arrow.png';

const Cart = ({ items }) => {

  return (
    <>
    <div className="row">
      <div className="column left">
        <Link to="/"><h6 className="backLink"><img className="arrow" src={arrow} alt="arrow" /> Back</h6></Link>
      </div>
      <div className="column right">
      <h2 className="listTitle">Cart</h2>
      <Link to="/cart/checkoutForm">Checkout</Link>
      <div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total price</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item) => (
                <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td></td>
                <td></td>
              <td>
                <button>Quantity</button>
                <button>Delete</button>
              </td>
                </tr>
              ))
            ) : ( 
              <tr>
                <td colSpan={3}>Cart empty</td>
              </tr>
            )}
            
          </tbody>
        </table>
      </div>
      </div>
    </div>
    </>      
  )
}

export default Cart;
