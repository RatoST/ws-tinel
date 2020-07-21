import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import WsDetails from './WsDetails';
import wsData from '../utility/wsData';

const Card = (props) => {

  const formatPrice = (price) => {
    return `${(price).toFixed(2)} EUR`
  }

  return (
    <div>
      <Router>
        <tr>
          <td><Link to="/WsDetails">{props.image}</Link></td>
          <span>{props.catIcon}</span>
        </tr>
        <tr>
          <td><h5>{props.date}</h5></td>
          <td><h5>{props.time}</h5></td>
        </tr>
        <tr>
          <td><h2><Link to="/WsDetails">{props.title}</Link></h2></td>
        </tr>
        <tr>
          <td><h3>{formatPrice(props.price)}</h3></td>
        </tr>
        <button>Add to Cart</button>
        <Switch>
          <Route path={"/" + WsDetails.id}>
          {wsData.map(dataWs => (
            <WsDetails
              key={dataWs.id}
              image={dataWs.image}
              catIcon={dataWs.catIcon}
              date={dataWs.date}
              time={dataWs.time}
              title={dataWs.title}
              price={dataWs.price}
              speaker={dataWs.speaker}
              descriptionWs={dataWs.descriptionWs}
            />
          ))}
           
          </Route>
        </Switch>
        </Router>
    </div>

  );

}

export default Card;