import React, {Component} from 'react';
import {withParams} from "../Helper";

class Receipt extends Component {
    constructor(props) {
        super(props);
        this.state = {site: this.props.location.state.site, pump: this.props.location.state.pump, start_time: this.props.location.state.start_time};
    }

    render() {
        return (
            <div>
                <h2>Receipt</h2>
                <table  className='table table-striped' aria-labelledby="tabelLabel">
                    <tr>
                        <td>Site</td>
                        <td>{this.state.site.name}</td>
                    </tr>
                    <tr>
                        <td>Pump</td>
                        <td>{this.state.pump.name}</td>
                    </tr>
                    <tr>
                        <td>Start Time</td>
                        <td>{this.state.start_time}</td>
                    </tr>
                    <tr>
                        <td>End Time</td>
                        <td>{new Date().toLocaleString()}</td>
                    </tr>
                </table>
                <a href="/find-site">Start Again</a>
            </div>
        );
    }
}

export default withParams(Receipt)
