import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Com/Navbar';
import Home from './Pages/Home';
import FetchData from './Com/FetchData';
import Footer from './Com/Footer';



const App = () => {
  return <>
  <Router>
    <Navbar/>
    <Routes>
      //Routes set the redirection,paths should be same to the one in Navbar.
      //changing the cat to FetchData to ftech relevant API info on the app.
      <Route exact path="/" element={<Home />} />
      <Route path="/general" element={<FetchData cat="general" />}/>
      <Route path="/business" element={<FetchData cat="business" />}/>
      <Route path="/entertainment" element={<FetchData cat="entertainment" />}/>
      <Route path="/science" element={<FetchData cat="science" />}/>
      <Route path="/health" element={<FetchData cat="health" />}/>
      <Route path="/sports" element={<FetchData cat="sports" />}/>
      <Route path="/technology" element={<FetchData cat="technology" />}/>

    </Routes>
    <Footer />
  </Router>
  </>;
  
}

export default App
