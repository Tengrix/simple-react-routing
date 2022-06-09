import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Home from '../routing_without_library/Routing/pages/Home';
import About from '../routing_without_library/Routing/pages/About';
import News from '../routing_without_library/Routing/pages/News';
import Contact from '../routing_without_library/Routing/pages/Contact';
import s from '../routing_without_library/Routing/navbar/Navbar.module.css'

const RoutingWithUsingLib = () => {
    console.log('with lib')
    return (
        <div className={s.navbarMenu}>
            <Link to={'/routingWithUsingLibrary/home'}>home</Link>
            <Link to={'/routingWithUsingLibrary/about'}>about</Link>
            <Link to={'/routingWithUsingLibrary/news'}>news</Link>
            <Link to={'/routingWithUsingLibrary/contact'}>contact</Link>
            <div>
                <Switch>
                    <Route exact path={'/routingWithUsingLibrary/home'}>
                        <Home/>
                    </Route>
                    <Route exact path={'/routingWithUsingLibrary/about'}>
                        <About/>
                    </Route>
                    <Route exact path={'/routingWithUsingLibrary/news'}>
                        <News/>
                    </Route>
                    <Route exact path={'/routingWithUsingLibrary/contact'}>
                        <Contact/>
                    </Route>
                </Switch>
            </div>

        </div>
    );
};

export default RoutingWithUsingLib;