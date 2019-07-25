import React, {Component, PropTypes} from 'react';
import reactMixin from 'react-mixin';
import {ListenerMixin} from 'reflux';
import _ from 'lodash';
import client from '../client';
import Mozaik from 'mozaik/browser';


class Timers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timers: null
        };
    }

    getApiRequest() {
        const {timers} = this.props;

        return {
            id: 'harvestv1.timers',
            params: {timers}
        };
    }

    onApiData(timers) {
        console.log('harvest is running');
        this.setState({
            timers
        });
    }

    render() {
        let { timers } = this.state;
        console.log(timers);

        return (
            <div>
                {console.log(timers)}
            </div>
        );
    }
}

//Timers.displayName = 'Harvest Timers';

//Timers.propTypes = {

//};

reactMixin(Timers.prototype, ListenerMixin);
reactMixin(Timers.prototype, Mozaik.Mixin.ApiConsumer);

export default Timers;
