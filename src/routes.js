import React from 'react';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import CookingPage from './components/CookingPage.js';

const routes = 
[
    {
        path: 'home', 
        element: <HomePage />
    },
    {
        path: 'about', 
        element: <AboutPage />
    },
    {
        path: 'cooking', 
        element: <CookingPage />
    },
];

export default routes;
