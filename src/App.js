import React from 'react';
import HeaderBar from './components/HeaderBar.js';
import { useRoutes } from 'react-router-dom';
import routes from './routes.js';

import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import CookingPage from './components/CookingPage.js';


const App = () => {

    return(
        <>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </>
    );
}

export default App;
