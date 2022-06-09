import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Routings from './components/Routings/Routings';
import RoutingWithoutUsingLib from './components/routing_without_library/Routing/RoutingWithoutUsingLib';
import RoutingWithUsingLib from './components/routing_with_react_router_dom/RoutingWithUsingLib';

function App() {
    return (
        <Router>
            <div className="App">
                <Link to='/routingWithoutUsingLibrary'>
                    RoutingWithoutUsingLibrary
                </Link>
                <Link to='/routingWithUsingLibrary'>
                    RoutingWithUsingLibrary
                </Link>
                <Switch>
                    <Route path={'/routingWithoutUsingLibrary'}>
                        <RoutingWithoutUsingLib/>
                    </Route>
                    <Route path={'/routingWithUsingLibrary'}>
                        <RoutingWithUsingLib/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
