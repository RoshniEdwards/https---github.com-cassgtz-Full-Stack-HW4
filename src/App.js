import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home';
import Country from './components/Country/Country';
//serving as a router
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Country />} />
        
      </Routes>

    </Router>
  );
}

export default App;

/*
//serving as a router
function App() {
  return (
    <Router>
      {
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/products"> Products </Link>
        </li>
      </ul>
      }

      {/**Switch will look for the first one that matches the path 
       * so if any url has a /, it will also render the Home component
       * you can use "exact path" so that it has to match the url exactly
       
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/about"> <About/> </Route>
        <Route exact path="/products/:productid"> <Products/> </Route>
      </Switch>
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jokes/:jokeid" element={<Joke />} />
        
      </Routes>

    </Router>
  );
}

export default App;*/
