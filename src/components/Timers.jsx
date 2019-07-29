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
        this.setState({
            timers
        });
    }

    render() {
        let { timers } = this.state;
        console.log(timers);

        let output = [];
        let iter = 0;
        while (timers && timers.time_entries && !!timers.time_entries[iter] && iter < 50) {
            if (timers.time_entries[iter].is_running) {
                output.push(
                    <div className="running-timer">
                        <div className="username">{timers.time_entries[iter].user.name}</div>
                        <div className="timer-info">
                            {timers.time_entries[iter].project.name}
                            {": "}
                            {timers.time_entries[iter].task.name}
                        </div>
                    </div>
                );
            }
            iter++;
        }

        return (
            <div className="harvest">
                {output}
            </div>
        );
    }
}

reactMixin(Timers.prototype, ListenerMixin);
reactMixin(Timers.prototype, Mozaik.Mixin.ApiConsumer);

export default Timers;
