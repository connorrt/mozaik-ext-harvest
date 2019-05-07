import React, {Component, PropTypes} from 'react';
import reactMixin from 'react-mixin';
import {ListenerMixin} from 'reflux';
import _ from 'lodash';
import Harvest from 'harvest_api_v2';


class Timers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    getApiRequest() {
        return {
            id: 'sample.sampleMethod'
        };
    }

    onApiData(data) {
        console.log(data);
        this.setState({count: data.count});
    }

    render() {
        const { count } = this.state;

        return (
        <div>
            <p>{count}</p>
            <p>Hello, world</p>
        </div>
    );
    }
}

Timers.displayName = 'Harvest Timers';

Timers.propTypes = {};

reactMixin(Timers.prototype, ListenerMixin);


export default Timers;
