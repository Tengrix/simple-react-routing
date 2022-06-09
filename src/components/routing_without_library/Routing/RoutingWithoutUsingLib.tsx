import React from 'react';
import Navbar from './navbar/Navbar';
import Route from './route/Route';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';

const RoutingWithoutUsingLib = () => {
    console.log('no lib')
    return (
        <div>
            <Navbar/>
            <div>
                <Route path={'/routingWithoutUsingLibrary/home'}>
                    <Home/>
                </Route>
                <Route path={'/routingWithoutUsingLibrary/about'}>
                    <About/>
                </Route>
                <Route path={'/routingWithoutUsingLibrary/news'}>
                    <News/>
                </Route>
                <Route path={'/routingWithoutUsingLibrary/contact'}>
                    <Contact/>
                </Route>
            </div>
        </div>
    );
};

export default RoutingWithoutUsingLib;