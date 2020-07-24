import React, {useState} from 'react';
import { 
  BrowserRouter as Router, 
   Routes, 
   Route, 
   Link, 
   Outlet, 
   useParams 
} from 'react-router-dom';
import _ from 'lodash';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import shops from './utility/shops';
import Cart from './components/Cart';
import './App.css';
import logo from './images/logo.svg'
import clock from './images/eva_clock.png';
import calendar from './images/calendar.png';
import arrow from './images/arrow.png';
import Brush from './images/brush.png';
import Fed from './images/fed.png';
import Bed from './images/bed.png';
import Mar from './images/mar.png';
import CartImg from './images/cart.png';

const App = () => {

  const [filterStats, setFilterStatus] = useState("");
  const [items, setItems] = useState([]);

  const changeFilterInit = () => {
    setFilterStatus("");
  }

  const addItem = (item) => {
    const newInput = [...items, item];
    setItems(newInput);
  };



  return(
    <Router>
      <nav className="navBar">
        <Link to="/"><img onClick={changeFilterInit} className="logoImg" src={logo} alt="logo"/></Link>  
        <Link to="/cart"><img className="cartImg" src={CartImg} alt="cart"/></Link>
      </nav>
        <Routes>
          <Route path="/" element={
          <Home 
          addItem={addItem} 
          filterStats={filterStats} 
          setFilterStatus={setFilterStatus}   
          />}/>
          <Route path="/cart" element={<Cart/>}/>
            <Route path="workshops" element={<Launch />}>
              <Route path=":slug" element={<LaunchShop/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>

  );
}

const Home = ({ addItem, filterStats, setFilterStatus}) => {

  const handleAdd = (event, item) => {
    // event.preventDefault();
    addItem(item);
  };

  const formatPrice = (price) => {
    return `${(price).toFixed(2)} EUR`
  }

  const changeFilterInit = () => {
    setFilterStatus("");
  }

  const changeFilterDesign = () => {
    setFilterStatus("design");
  }

  const changeFilterFed = () => {
    setFilterStatus("fed");
  }

  const changeFilterBed = () => {
    setFilterStatus("bed");
  }
  
  const changeFilterMar = () => {
    setFilterStatus("mar");
  }


  // const filteredDesign = shops.filter((shop) => 
  //   shop.theme.includes(filterStats));

  // const filteredShop = _.find(shops, {theme:filterStats});

  return (
    <div className="row">
      <div className="column left">
        <h6 className="filterText">Filter by category:</h6>
        <h5 className="allClass" onClick={changeFilterInit}> All</h5>
        <h5 className="filterClass" onClick={changeFilterDesign}><img className="filterImg" src={Brush} alt="icon" width={20}/>Design</h5>
        <h5 className="filterClass" onClick={changeFilterFed}><img className="filterImg" src={Fed} alt="icon" width={18}/>Frontend</h5>
        <h5 className="filterClass" onClick={changeFilterBed}><img className="filterImg" src={Bed} alt="icon" width={18}/>Backend</h5>
        <h5 className="filterClass" onClick={changeFilterMar}><img className="filterImg" src={Mar} alt="icon" width={18}/>Marketing</h5>
      </div>
      <div className="column right">
        <h2 className="listTitle">Workshops</h2>
          <div className="dictionary">
            {Object.entries(shops).map(([slug, {image, catIcon, title, date, time, price}]) => (
              <Card className="term" key={slug}>
              <Link to={`/workshops/${slug}`}>
                <Card.Img variant="top" src={image}/>
                <span><img src={catIcon} alt="icon" width={20}/></span>
              </Link>
                <Card.Body>
                  <h6 className="dateText"><span><img src={calendar} alt="cal" width={15}/> {date} </span>
                  <span><img src={clock} alt="clo" width={15}/> {time} </span></h6>
                <Link to={`/workshops/${slug}`}>
                  <Card.Title><h4 className="cardTitle">{title}</h4></Card.Title>
                </Link>
                  <Card.Text><h3 className="price">{formatPrice(price)}</h3></Card.Text>
                  <Button 
                    variant='warning'
                    onClick={handleAdd(shops)}
                    >
                    Add to Cart
                  </Button>   
                </Card.Body>
              </Card>
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

// Link for details
const LaunchShop = () => {
  const { slug } = useParams();
  const shop = shops[slug];

    if(!shop) {
      return <h2>Not Found!</h2>;
    }

  const { 
    title, theme, detImg, catIcon, date, time, price, speaker, description 
  } = shop;

  const formatPrice = (price) => {
    return `${(price).toFixed(2)} EUR`
  }

  // const filteredDesign = shops.filter((shop) => 
  //   (shop.theme.includes(theme)));

  // const filteredShop = _.find(shops, {theme:theme});

  return (
    <>
    <div className="row">
      <div className="column left">
        <Link to="/"><h6 className="backLink"><img className="arrow" src={arrow} alt="arrow" /> Back</h6></Link>
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
    <div className="row similar">
      <div>
      <h2 className="listTitle">Similar Workshops</h2>
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
    </>
  )
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