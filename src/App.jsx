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
              <Route path=":id" element={<LaunchShop/>}/>
            </Route>
             <Route path="design" element={<Design />}/>
            <Route path="frontend" element={<Frontend/>}/>
            <Route path="backend" element={<Backend/>}/>
            <Route path="marketing" element={<Marketing/>}/>            
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
         <h5><Link to="/">All</Link></h5>
        <h5><Link to="/design">Design</Link></h5>
        <h5><Link to="/frontend">Frontend</Link></h5>
        <h5><Link to="/backend">Backend</Link></h5>
        <h5><Link to="/marketing">Marketing</Link></h5>
      </div>
      <div className="column right">
        <h2 className="listTitle">Workshops</h2>
          <div className="dictionary">
            {Object.entries(shops).map(([id, {image, catIcon, title,date, time, price}]) => (
                <div className="term" key={id}>
                <Link to={`/workshops/${id}`}>
                  <img className="bckImg" src={image} alt={title}/>
                </Link>
                <span><img src={catIcon} alt="icon" width={20}/></span>
                <h6 className="dateText"><span><img src={calendar} alt="cal" width={15}/> {date} </span>
                <span><img src={clock} alt="clo" width={15}/> {time} </span></h6>
                <Link to={`/workshops/${id}`}> 
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

// Link for details
const LaunchShop = () => {
  const { id } = useParams();
  const shop = shops[id];

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

  const filteredDesign = shops.filter((shop) => 
  (shop.theme.includes("design")))

  const formatPrice = (price) => {
    return `${(price).toFixed(2)} EUR`
  }

  return (
    <div className="row">
      <div className="column left">
        <h6 className="filterText">Filter by category:</h6>
         <h5><Link to="/">All</Link></h5>
        <h5><Link to="/design">Design</Link></h5>
        <h5><Link to="/frontend">Frontend</Link></h5>
        <h5><Link to="/backend">Backend</Link></h5>
        <h5><Link to="/marketing">Marketing</Link></h5>        
      </div>
      <div className="column right">
        <h2 className="listTitle">Workshops</h2>
          <div className="dictionary">
            {Object.entries(filteredDesign).map(([id, {image, catIcon, title,date, time, price}]) => (
                <div className="term" key={id}>
                <Link to={`/workshops/${id}`}>
                  <img className="bckImg" src={image} alt={title}/>
                </Link>
                <span><img src={catIcon} alt="icon" width={20}/></span>
                <h6 className="dateText"><span><img src={calendar} alt="cal" width={15}/> {date} </span>
                <span><img src={clock} alt="clo" width={15}/> {time} </span></h6>
                <Link to={`/workshops/${id}`}> 
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

const Frontend = () => {

  const filteredDesign = shops.filter((shop) => 
  (shop.theme.includes("fed")))

  const formatPrice = (price) => {
    return `${(price).toFixed(2)} EUR`
  }

  return (
    <div className="row">
      <div className="column left">
        <h6 className="filterText">Filter by category:</h6>
         <h5><Link to="/">All</Link></h5>
        <h5><Link to="/design">Design</Link></h5>
        <h5><Link to="/frontend">Frontend</Link></h5>
        <h5><Link to="/backend">Backend</Link></h5>
        <h5><Link to="/marketing">Marketing</Link></h5>
      </div>
      <div className="column right">
        <h2 className="listTitle">Workshops</h2>
          <div className="dictionary">
            {Object.entries(filteredDesign).map(([id, {image, catIcon, title,date, time, price}]) => (
                <div className="term" key={id}>
                <Link to={`/workshops/${id}`}>
                  <img className="bckImg" src={image} alt={title}/>
                </Link>
                <span><img src={catIcon} alt="icon" width={20}/></span>
                <h6 className="dateText"><span><img src={calendar} alt="cal" width={15}/> {date} </span>
                <span><img src={clock} alt="clo" width={15}/> {time} </span></h6>
                <Link to={`/workshops/${id}`}> 
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

const Backend = () => {

  const filteredDesign = shops.filter((shop) => 
  (shop.theme.includes("bed")))

  const formatPrice = (price) => {
    return `${(price).toFixed(2)} EUR`
  }

  return (
    <div className="row">
      <div className="column left">
        <h6 className="filterText">Filter by category:</h6>
         <h5><Link to="/">All</Link></h5>
        <h5><Link to="/design">Design</Link></h5>
        <h5><Link to="/frontend">Frontend</Link></h5>
        <h5><Link to="/backend">Backend</Link></h5>
        <h5><Link to="/marketing">Marketing</Link></h5>
      </div>
      <div className="column right">
        <h2 className="listTitle">Workshops</h2>
          <div className="dictionary">
            {Object.entries(filteredDesign).map(([id, {image, catIcon, title,date, time, price}]) => (
                <div className="term" key={id}>
                <Link to={`/workshops/${id}`}>
                  <img className="bckImg" src={image} alt={title}/>
                </Link>
                <span><img src={catIcon} alt="icon" width={20}/></span>
                <h6 className="dateText"><span><img src={calendar} alt="cal" width={15}/> {date} </span>
                <span><img src={clock} alt="clo" width={15}/> {time} </span></h6>
                <Link to={`/workshops/${id}`}> 
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

const Marketing = () => {

  const filteredDesign = shops.filter((shop) => 
  (shop.theme.includes("mar")))

  const formatPrice = (price) => {
    return `${(price).toFixed(2)} EUR`
  }

  return (
    <div className="row">
      <div className="column left">
        <h6 className="filterText">Filter by category:</h6>
         <h5><Link to="/">All</Link></h5>
        <h5><Link to="/design">Design</Link></h5>
        <h5><Link to="/frontend">Frontend</Link></h5>
        <h5><Link to="/backend">Backend</Link></h5>
        <h5><Link to="/marketing">Marketing</Link></h5>
      </div>
      <div className="column right">
        <h2 className="listTitle">Workshops</h2>
          <div className="dictionary">
            {Object.entries(filteredDesign).map(([id, {image, catIcon, title,date, time, price}]) => (
                <div className="term" key={id}>
                <Link to={`/workshops/${id}`}>
                  <img className="bckImg" src={image} alt={title}/>
                </Link>
                <span><img src={catIcon} alt="icon" width={20}/></span>
                <h6 className="dateText"><span><img src={calendar} alt="cal" width={15}/> {date} </span>
                <span><img src={clock} alt="clo" width={15}/> {time} </span></h6>
                <Link to={`/workshops/${id}`}> 
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

const NotFound = () => {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry, it seems page that you searched don`t exist here.</p>
    </div>
  )
}

export default App;