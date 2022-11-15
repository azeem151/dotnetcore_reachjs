import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {FindSite} from './components/FindSite';
import Pump from './components/Pump';
import PumpInUse from "./components/PumpInUse";
import Receipt from "./components/Receipt";
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home}/>
                <Route path='/find-site' component={FindSite}/>
                <Route path="/site-pumps/:siteId" component={Pump}/>
                <Route path="/site-pump-in-use/:siteId/:pumpId" component={PumpInUse}/>
                <Route path="/get-usage-receipt/:siteId/:pumpId" component={Receipt}/>
            </Layout>
        );
    }
}
