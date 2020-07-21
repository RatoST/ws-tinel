import React from 'react';

const WsDetails = (props) => {

  const formatPrice = (price) => {
    return `${(price).toFixed(2)} EUR`
  }
  return(
    <div>
      <div>
        {props.image}
      </div>
      <div>
        <span>{props.catIcon}</span>
        <h5>{props.date}</h5>
        <h5>{props.time}</h5>
      </div>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
      <h3>{formatPrice(props.price)}</h3>
      </div>
      <div>
        <h4>{props.speaker}</h4>
      </div>
      <div>
        <p>{props.descriptionWs}</p>
      </div>
    </div>
  )
}
export default WsDetails;