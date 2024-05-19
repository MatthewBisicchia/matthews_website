import React from 'react';
import HeaderBar from './components/HeaderBar.js';
import { useRoutes } from 'react-router-dom';
import routes from './routes.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import CookingPage from './components/CookingPage.js';


const App = () => {

    return(
        <>
            <HeaderBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/matthews_website/home" element={<HomePage />} />
                    <Route path="/matthews_website/about" element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
