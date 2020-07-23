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
import logo from './images/logo.svg'
import clock from './images/eva_clock.png';
import calendar from './images/calendar.png';
import arrow from './images/arrow.png';

const App = () => {
  return(
    <Router>
      <nav className="navBar">
        <Link to="/"><img className="logoImg" src={logo} alt="logo"/></Link>    
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
        <h6 className="filterText">Filter by category:</h6>
        {/* <button onClick={filteredDesign}>Design</button> */}
         <h5><Link to="/">All</Link></h5>
        <h5><Link to="/design">Design</Link></h5>
        {/*<h5><Link to="/frontend">Frontend</Link></h5>
        <h5><Link to="/marketing">Marketing</Link></h5>
        <h5><Link to="/backend">Backend</Link></h5> */}
      </div>
      <div className="column right">
        <h2 className="listTitle">Workshops</h2>
          <div className="dictionary">
            {Object.entries(shops).map(([slug, {image, catIcon, title,date, time, price}]) => (
                <div className="term" key={slug}>
                <Link to={`/workshops/${slug}`}>
                  <img className="bckImg" src={image} alt={title}/>
                </Link>
                <span><img src={catIcon} alt="icon" width={20}/></span>
                <h6 className="dateText"><span><img src={calendar} alt="cal" width={15}/> {date} </span>
                <span><img src={clock} alt="clo" width={15}/> {time} </span></h6>
                <Link to={`/workshops/${slug}`}> 
                  <h4 className="cardTitle">{title}</h4>
                </Link>   
                <h3 className="price">{formatPrice(price)}</h3>
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
    title, detImg, catIcon, date, time, price, speaker, description 
  } = shop;

  const formatPrice = (price) => {
    return `${(price).toFixed(2)} EUR`
  }


  return (
    <div className="row">
      <div className="column left">
        <Link to="/"><h6 className="backLink"><img className="arrow" src={arrow} alt="arrow" /> Natrag</h6></Link>
      </div>
      <div className="column right">
        <img className="detBckImg" src={detImg} alt={title} />
        <div className="row"> 

        <div className="detDiv detLeft">
        <h6 className="dateText"> <span className="iconDetails" ><img src={catIcon} alt={"icon"}/></span> <span><img className="timeIcon" src={calendar} alt="cal" /> {date} </span>
        <span> <img className="timeIcon" src={clock} alt="clo"/> {time} </span></h6>
        <h1 className="detTitle">{title}</h1>
        <div className="speaker"><p className="speakerP">WITH</p><h4 className="speakerH">{speaker}</h4></div>
        
        <p className="descText">{description}</p>
        </div> 
        <div className="detDiv detRight">
        <div className="box">
          <h5>Buy Your Ticker</h5>
          <h3 className="price">{formatPrice(price)}</h3>
          <div>
          {/* Dropdown */}
          <div>
          <Button variant="warning">Add to Cart</Button>
          <h6>Subtotal:</h6>
          </div>
          </div>
        </div>
        </div>
        </div>
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