import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { useState } from 'react';
import About from "./pages/index";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Navbar from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const [page, setPage] = useState("")
  const [url, setUrl] = useState("")
  const [text, setText] = useState("")
  
  return (
    <Router>
      <div>
        <Navbar />     
          <Route exact path="/"  >
              <About setPage={setPage} setUrl={setUrl} setText={setText}/>
            </Route>
          <Route exact path="/Portfolio"  >
              <Portfolio setPage={setPage} setUrl={setUrl} setText={setText}/>
            </Route> 
          <Route exact path="/Contact" >
              <Contact setPage={setPage} setUrl={setUrl} setText={setText}/>
            </Route>
        <Footer page={page} url={url} text={text}/>
      </div>
    </Router>
  );
}

export default App;
