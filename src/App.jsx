import React from 'react';
import { 
  BrowserRouter as Router, 
   Routes, 
   Route, 
   Link, 
   Outlet, 
   useParams 
} from 'react-router-dom';
import shops from './utility/shops';

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
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>

  );
}

const Home = () => {
  return (
    <div>
      <div>
        <h6>Filter by category:</h6>
        <h3><Link to="/">All</Link></h3>
        <h3><Link to="">Design</Link></h3>
        <h3><Link to="">Frontend</Link></h3>
        <h3><Link to="">Marketing</Link></h3>
        <h3><Link to="">Backend</Link></h3>
      </div>
      <div>
        <h1>Workshops</h1>
          <ul>
            {Object.entries(shops).map(([slug, {image, title, time}]) => (
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

const NotFound = () => {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry, it seems page that you searched don`t exist here.</p>
    </div>
  )
}

export default App;