import React from 'react';
import HeaderBar from './components/HeaderBar.js';

import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import CookingPage from './components/CookingPage.js';


const App = () => {

    return(
        <>
            <HeaderBar />
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cooking" element={<CookingPage />} />
            </Routes>
        </>
    );
}

export default App;
