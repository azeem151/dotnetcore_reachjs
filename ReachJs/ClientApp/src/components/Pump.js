import React, { Component } from 'react';
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}


class Pump extends Component {
  constructor(props) {
      super(props);
      
    this.state = { site: null, loading: true };
  }

    componentDidMount() {
        
        this.getSite();
  }

    static renderPumps(site) {
        console.log(site)
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>           
          </tr>
        </thead>
        <tbody>
          {site.pumps.map(pump =>
            <tr key={pump.id}>
              <td>{pump.id}</td>
                  <td>{pump.name}</td>
              <td><a href="">Unlock</a></td>             
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : Pump.renderPumps(this.state.site);

    return (
        <div>
            <h1 id="tabelLabel" >Site {this.state.site ? this.state.site.name : ""} Pumps</h1>
        <p>Click unlock action to start fueling</p>
        {contents}
      </div>
    );
  }

async getSite() {
    const response = await fetch('api/Site/id/' + this.props.params.siteId);
    const data = await response.json();
    this.setState({ site: data, loading: false });
  }
}

export default withParams(Pump)
