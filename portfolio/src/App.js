import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./pages/index";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import { useState } from 'react';


function App() {
  const [page, setPage] = useState("")
  const [url, setUrl] = useState("")
  return (
    <Router>
      <div>
        <Navbar />     
          <Route exact path="/"   >
              <About setPage={setPage} setUrl={setUrl} />
            </Route>
          <Route exact path="/Portfolio"  >
              <Portfolio setPage={setPage} setUrl={setUrl} />
            </Route> 
          <Route exact path="/Contact" component={Contact} />
        <Footer page={page} url={url}/>
      </div>
    </Router>
  );
}

export default App;
