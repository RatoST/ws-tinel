import React, {useState} from 'react';
import { 
  BrowserRouter as Router, 
   Routes, 
   Route, 
   Link,  
   useParams 
} from 'react-router-dom';

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import Cart from './components/Cart';
import CheckoutForm from './components/ChekoutForm';
import Footer from './components/Footer';
import shops from './utility/shops';
import Workshop from './components/Workshop';
import './App.css';

import arrow from './images/arrow.png';
import Bed from './images/bed.png';
import BrushS from './images/brush.png';
import calendar from './images/calendar.png';
import CartImg from './images/cart.png';
import CartNotEmpty from './images/cartNotEmpty.png'
import clock from './images/eva_clock.png';
import Fed from './images/fed.png';
import logo from './images/logo.svg'
import Mar from './images/mar.png';


const App = () => {
  
  const initCartArray = []; 

  const [filterStats, setFilterStatus] = useState("");
  const [workshops, setWorkshops] = useState(initCartArray);

  const changeFilterInit = () => {
    setFilterStatus("");
  }

  const deleteWorkshop = (id) => {
    setWorkshops(workshops.filter((addWork) => addWork.id !== id))
  };

  return(
    <Router>
      <nav className="navBar">
        <Link to="/"><img onClick={changeFilterInit} className="logoImg" src={logo} alt="logo"/></Link>  
        <Link to="/cart"><img className="cartImg" src={(workshops.length > 0) ? CartNotEmpty: CartImg} alt="cart"/><span className="cartDet">{ (workshops.length > 0) ? `${((workshops).length)} Workshop in Cart` : "Cart is Empty" }</span></Link> 
      </nav>
        <Routes>
          <Route path="/" element={<Home filterStats={filterStats} setFilterStatus={setFilterStatus} workshops={workshops} setWorkshops={setWorkshops} />}/>
          <Route path="/cart" element={<Cart workshops={workshops} deleteWorkshop={deleteWorkshop}/>}/>
          <Route path="/cart/checkoutForm" element={<CheckoutForm/>}/>
          <Route path="workshops/:id" element={<LaunchShop/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <footer>
        <Footer />
        </footer>
    </Router>
  );
}

const Home = ({ filterStats, setFilterStatus, workshops, setWorkshops}) => {

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


  const filteredShops = shops.filter((shop) => 
    shop.theme.includes(filterStats));

  return (
    <div className="row">
      <div className="column left">
        <h6 className="filterText">Filter by category:</h6>
        <h5 className="allClass" onClick={changeFilterInit}> All</h5>
        <h5 className="filterClass" onClick={changeFilterDesign}><img className="filterImg" src={BrushS} alt="icon" width={20}/>Design</h5>
        <h5 className="filterClass" onClick={changeFilterFed}><img className="filterImg" src={Fed} alt="icon" width={18}/>Frontend</h5>
        <h5 className="filterClass" onClick={changeFilterBed}><img className="filterImg" src={Bed} alt="icon" width={18}/>Backend</h5>
        <h5 className="filterClass" onClick={changeFilterMar}><img className="filterImg" src={Mar} alt="icon" width={18}/>Marketing</h5>
      </div>
      <div className="column right">
        <h2 className="listTitle">Workshops</h2>
        <h6 className="listDisplay">Displayed {filteredShops.length}</h6>
          <div className="workshopsContainer">
            {filteredShops.map(item => <Workshop item={item} key={item.id} workshops={workshops} setWorkshops={setWorkshops} />)}        
          </div>
      </div>
    </div>
  );
}


// Link for details
const LaunchShop = () => {
  const { id } = useParams();
  const shop = shops[id];

    if(!shop) {
      return <h2>Not Found!</h2>;
    }

  const { 
    title, theme, detImg, catIcon, date, time, price, speaker, description 
  } = shop;

  const formatPrice = (price) => {
    return `${(price).toFixed(2)} EUR`
  }

  const filteredShops = shops.filter((shop) => 
    (shop.theme.includes(theme)&&shop.id !== id));
    

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
    <div className="column left"></div>
      <div className="column right">
      <h2 className="similarTitle">Similar Workshops</h2>
      <div className="dictionary similarCards">
            {filteredShops.map(({id, image, catIcon, title, date, time, price}) => (
              <Card className="term" key={id}>
              <Link to={`/workshops/${id}`}>
                <Card.Img variant="top" src={image}/>
                <span><img className="cardIcon" src={catIcon} alt="icon" width={20}/></span>
              </Link>
                <Card.Body>
                  <h6 className="dateText"><span><img src={calendar} alt="cal" width={15}/> {date} </span>
                  <span><img src={clock} alt="clo" width={15}/> {time} </span></h6>
                <Link to={`/workshops/${id}`}>
                  <Card.Title><h4 className="cardTitle">{title}</h4></Card.Title>
                </Link>
                  <Card.Text><span className="price">{formatPrice(price)}</span></Card.Text>
                  <Button variant="warning">Add to Cart</Button>   
                </Card.Body>
              </Card>
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
      <p>Sorry, it seems page that you searched doesn`t exist here.</p>
    </div>
  )
}

export default App;