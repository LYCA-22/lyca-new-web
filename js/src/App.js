import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/header.css';
import './css/font.css';
import './css/job.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';

function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Router>
            <dive className="container">
                <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
                <div
                    className={`blur-backtround ${isMenuOpen ? 'active' : ''}`}
                    id = "blurBg"
                    onClick={closeMenu}
                ></div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/job" element={<About />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </dive>
        </Router>
    );
}

export default App;