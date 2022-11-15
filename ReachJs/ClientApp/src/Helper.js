import {useParams, useLocation} from 'react-router-dom';
import React from "react";

// Using useParams to get route parameters
// Using useLocation to pass data around
export function withParams(Component) {
    return props => <Component {...props} params={useParams()} location={useLocation()}/>;
}