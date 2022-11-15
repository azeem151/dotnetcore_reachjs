import React, {Component} from 'react';
import {withParams} from "../Helper";
import {Link} from "react-router-dom";

class PumpInUse extends Component {
    constructor(props) {
        super(props);
        this.state = {site: this.props.location.state.site, pump: this.props.location.state.pump, unlock_time: new Date().toLocaleString()};
    }

    render() {
        return (
            <div>
                <h1 id="tabelLabel">Site: {this.state.site.name} Pump: {this.state.pump.name} in use</h1>
                <p>Started at {this.state.unlock_time}</p>
                <Link
                    style={{display: "block", margin: "1rem 0"}}
                    to={{
                        pathname: `/get-usage-receipt/${this.state.site.id}/${this.state.pump.id}`,
                        state: {site: this.state.site, pump: this.state.pump, start_time: this.state.unlock_time}
                    }}
                    key={this.state.site.id}
                >
                    Finish and get receipt
                </Link>
            </div>
        );
    }
}

export default withParams(PumpInUse)
