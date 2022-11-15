import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class FindSite extends Component {
    static displayName = FindSite.name;

    constructor(props) {
        super(props);
        this.state = {sites: [], siteName: "", loading: true, error: null};
    }

    btnClickHandler = () => {
        this.getSites()
    };

    async getSites() {
        const response = await fetch('api/Site/name/' + this.state.siteName);
        const data = await response.json();
        this.setState({sites: data, loading: false});
    }

    render() {
        return (
            <div>
                <p>Following sites are available to search, ASite1, BSite2, CSite3, ASite2</p>
                <input type="text" id="siteName" name="siteName" onChange={(e) => this.setState({siteName: e.target.value})}></input>
                <button onClick={this.btnClickHandler}>Find Site</button>

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
                                <td>{site.id}</td>
                                <td>{site.name}</td>
                                <td>
                                    <Link
                                        style={{display: "block"}}
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
