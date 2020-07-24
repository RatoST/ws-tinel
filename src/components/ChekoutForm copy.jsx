import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

import '../App.css';
import arrow from '../images/arrow.png';

const CheckoutForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <>
    <div className="row">
      <div className="column left">
        <Link to="/cart"><h6 className="backLink"><img className="arrow" src={arrow} alt="arrow" /> Back</h6></Link>
      </div>
      <div className="column right">
      <h2 className="listTitle">Checkout</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="firstName" placeholder="First name" ref={register({ required: "This is required.", maxLength: 20})}/>
          <ErrorMessage errors={errors} name="singleErrorInput" />
          <input name="lastName" placeholder="Last name" ref={register({ required:true, maxLength: 20})}/>
          <input name="email" placeholder="Email" ref={register}/>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
           <select name="gender" ref={register}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
           </select>
          <input type="submit" />
        </form>
      </div>
    </div>
    </>  

  );
}

export default CheckoutForm;
