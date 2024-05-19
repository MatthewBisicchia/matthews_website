import React from 'react';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import CookingPage from './components/CookingPage.js';

const routes = 
[
    {
        path: '/site/home', 
        element: <HomePage />
    },
    {
        path: '/site/about', 
        element: <AboutPage />
    },
    {
        path: '/site/cooking', 
        element: <CookingPage />
    },
];

export default routes;
