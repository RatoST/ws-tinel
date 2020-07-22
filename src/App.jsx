import React from 'react';
import { 
  BrowserRouter as Router, 
   Routes, 
   Route, 
   Link, 
   Outlet, 
   useParams 
} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import shops from './utility/shops';
import './App.css';
import clock from './images/eva_clock.png';
import calendar from './images/calendar.png';

const App = () => {
  return(
    <Router>
      <nav>
        <Link to="/">Home</Link>    
      </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="workshops" element={<Launch />}>
              <Route path=":slug" element={<LaunchShop/>}/>
            </Route>
             <Route path="design" element={<Design />}/>
            {/*<Route path="frontend" element={<Frontend/>}/>
            <Route path="marketing" element={<Marketing/>}/>
            <Route path="backend" element={<Backend/>}/> */}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>

  );
}

const Home = () => {

  const formatPrice = (price) => {
    return `${(price).toFixed(2)} EUR`
  }


  return (
    <div className="row">
      <div className="column left">
        <h6>Filter by category:</h6>
        {/* <button onClick={filteredDesign}>Design</button> */}
         <h3><Link to="/">All</Link></h3>
        <h3><Link to="/design">Design</Link></h3>
        {/*<h3><Link to="/frontend">Frontend</Link></h3>
        <h3><Link to="/marketing">Marketing</Link></h3>
        <h3><Link to="/backend">Backend</Link></h3> */}
      </div>
      <div className="column right">
        <h1>Workshops</h1>
          <div className="dictionary">
            {Object.entries(shops).map(([slug, {image, catIcon, title,date, time, price}]) => (
                <div className="term" key={slug}>
                <Link to={`/workshops/${slug}`}>
                  <img src={image} alt={title} width={200}/>
                </Link>
                <span><img src={catIcon} alt="icon" width={20}/></span>
                <h4><span><img src={calendar} alt="cal" width={15}/> {date} </span>
                <span><img src={clock} alt="clo" width={15}/> {time} </span></h4>
                <Link to={`/workshops/${slug}`}> 
                  <h2>{title}</h2>
                </Link>   
                <h4>{formatPrice(price)}</h4>
                <Button variant='warning'>Add to Cart</Button>     
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

const Launch = () => {
  return (
    <div>
        <Outlet />
    </div>);
}


const LaunchShop = () => {
  const { slug } = useParams();
  const shop = shops[slug];

    if(!shop) {
      return <h2>Not Found!</h2>;
    }

  const { 
    title, image, catIcon, time, price, speaker, description 
  } = shop;

  return (
    <div>
      <div>
        <Link to="/">Natrag</Link>
      </div>
      <div>
        <img src={image} alt={title} width={600} />
        <span><img src={catIcon} alt={"icon"}/></span>
        <h4>{time}</h4>
        <h2>{title}</h2>
        <h3>{speaker}</h3>
        <h2>{price}</h2>
        <h6>{description}</h6>
      </div>
    </div>
  )
}

const Design = () => {

  const filteredDesign = Object.entries.shops.filter((shop) => 
  (shop.theme.includes("design")))

  return (
    <div>
      <div>
        <h6>Filter by category:</h6>
        <h3><Link to="/">All</Link></h3>
        <h3><Link to="/design">Design</Link></h3>
        {/* <h3><Link to="/frontend">Frontend</Link></h3>
        <h3><Link to="/marketing">Marketing</Link></h3>
        <h3><Link to="/backend">Backend</Link></h3> */}
      </div>
      <div>
        <h1>Workshops</h1>
          <ul>
            {Object.entries(filteredDesign).map(([slug, {image, title, time}]) => (
              <li key={slug}>
                <Link to={`/workshops/${slug}`}>
                  <img src={image} alt={title} width={200}/>
                </Link>
                <h4>{time}</h4>
                <Link to={`/workshops/${slug}`}> 
                  <h2>{title}</h2>
                </Link>          
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}

const NotFound = () => {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry, it seems page that you searched don`t exist here.</p>
    </div>
  )
}

export default App;