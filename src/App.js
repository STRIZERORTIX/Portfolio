import './index.css';
import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import About from './Components/AboutMe/About';
import Work from './Components/Work/Work';
function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/nav" element={<Nav/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/aboutme" element={<About/>} />
                <Route path="/work" element={<Work/>} />
                {/*<Route path="*" element={<Err404 />} />*/}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
