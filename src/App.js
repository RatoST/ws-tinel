import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Card from './components/Card';
import Cart from './components/Cart';
import wsData from './utility/wsData';
import Sidebar from './components/Sidebar';

function App() {
  const [checkDetails, setCheckDetails] = useState(false);
  return (
  <div>
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    <Sidebar 
      width={300}
      children={"Test"}
    />
    <div>
      <h1>Workshops</h1>
      <dl>
        {wsData.map(dataWs => (
          <Card
            key={dataWs.id}
            image={dataWs.image}
            catIcon={dataWs.catIcon}
            date={dataWs.date}
            time={dataWs.time}
            title={dataWs.title}
            price={dataWs.price}
            />
        ))}
      </dl>
    </div>
  </div>
  );
}

export default App;
