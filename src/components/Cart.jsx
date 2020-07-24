import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../App.css';
import arrow from '../images/arrow.png';

const Cart = () => {

  return (
    <>
    <div className="row">
      <div className="column left">
        <Link to="/"><h6 className="backLink"><img className="arrow" src={arrow} alt="arrow" /> Back</h6></Link>
      </div>
      <div className="column right">
      <h2 className="listTitle">Cart</h2>
      <Link to="/cart/checkoutForm">Checkout</Link>
      </div>
    </div>
    </>      
  )
}

export default Cart;
