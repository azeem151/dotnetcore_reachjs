import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FindSite } from './components/FindSite';

import './custom.css'
import Pump  from './components/Pump';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />        
        <Route path='/find-site' component={FindSite} />           
            <Route path="/site-pumps/:siteId" component={Pump} />
      </Layout>
    );
  }
}
