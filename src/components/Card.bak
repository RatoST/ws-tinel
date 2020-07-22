import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
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
        <Link to="/WsDetails">{props.image}</Link>
          {props.catIcon}   
          <h5>{props.date}</h5>
          <h5>{props.time}</h5>
          <h2><Link to="/WsDetails">{props.title}</Link></h2>
          <h3>{formatPrice(props.price)}</h3>
          <button>Add to Cart</button>
        <Switch>
          <Route path="/WsDetails">
            <Topics/>           
          </Route>
        </Switch>
        </Router>
    </div>

  );

}

const Topics = () => {
  let match = useRouteMatch();
  return(
    <div>
      {/* <h2>Workshop details</h2>
      <Link to={`${match.url}/Workshops`}>Workshops</Link>
      <Switch>
        <Route path={`${match.path}/:wsData.id`}>
          <Topic/>
        </Route>
      </Switch> */}
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
    </div>
  );
}

const Topic =() => {
  let { wsData } = useParams();
  return( 
    <div>
      {/* {wsData.map(dataWs => (
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
          ))} */}
  </div>)
}

export default Card;