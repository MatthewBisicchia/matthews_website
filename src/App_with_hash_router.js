import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HeaderBar from './components/HeaderBar.js';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import CookingPage from './components/CookingPage.js';


const App = () => {
    return(
        <Router>
            <HeaderBar />

            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/cooking" element={<CookingPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
