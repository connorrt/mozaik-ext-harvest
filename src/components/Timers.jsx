import React, {Component, PropTypes} from 'react';
import reactMixin from 'react-mixin';
import {ListenerMixin} from 'reflux';
import _ from 'lodash';
import fetch from 'node-fetch';
import client from '../client'


class Timers extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getApiRequest() {
        return {
            id: 'sample.sampleMethod'
        };
    }

    onApiData(data) {
        client.getTimers('https://api.harvestapp.com/api/v2/users/me.json', {})
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
        console.log('blah blah');
    }

    render() {

        return (
            <div>
                <div>
                    Hello, world
                </div>
            </div>
        );
    }
}

Timers.displayName = 'Harvest Timers';

Timers.propTypes = {};

reactMixin(Timers.prototype, ListenerMixin);


export default Timers;
