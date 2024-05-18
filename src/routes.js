import React from 'react';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import CookingPage from './components/CookingPage.js';

const routes = 
[
    {
        path: '/matthews_website/home', 
        element: <HomePage />
    },
    {
        path: '/matthews_website/about', 
        element: <AboutPage />
    },
    {
        path: '/matthews_website/cooking', 
        element: <CookingPage />
    },
];

export default routes;
