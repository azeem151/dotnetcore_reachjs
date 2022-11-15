import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom";

export class FindSite extends Component {
    static displayName = FindSite.name;

    constructor(props) {
        super(props);
        this.state = { sites: [], siteName: "", loading: true, error: null };
    }

    toggleButtonState = () => {
        this.getSites()        
    };


    async getSites() {
        const response = await fetch('api/Site/name/' + this.state.siteName);
        const data = await response.json();
        this.setState({ sites: data, loading: false });
    }

    render() {
        const { error, loading, sites } = this.state;
        return (
            <div>
                <input type="text" id="siteName" name="siteName" onChange={(e) => this.setState({ siteName: e.target.value })} ></input>
                <button onClick={this.toggleButtonState}> Find Site </button>
                <div>
                    <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>                       
                    </tr>
                </thead>
                        <tbody>
                            {this.state.sites.map(site =>
                                <tr key={site.id}>                                    
                                    <td>{site.name}</td>                           
                                    <td>
                                        <Link
                                            style={{ display: "block", margin: "1rem 0" }}
                                            to={`/site-pumps/${site.id}`}
                                            key={site.id}
                                        >
                                            Get Pumps for {site.name}
                                        </Link>
                                    </td>
                        </tr>
                    )}
                </tbody>
            </table>
                </div>
                
            </div>
        );
    }
}
