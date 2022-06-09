import React from 'react';
import RoutingWithoutUsingLib from '../routing_without_library/Routing/RoutingWithoutUsingLib';
import RoutingWithUsingLib from '../routing_with_react_router_dom/RoutingWithUsingLib';

const Routings = () => {
    return (
        <div>
            <RoutingWithoutUsingLib/>
            <RoutingWithUsingLib/>
        </div>
    );
};

export default Routings;