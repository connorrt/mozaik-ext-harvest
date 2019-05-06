import React, { Component, PropTypes } from 'react';
import reactMixin                      from 'react-mixin';
import { ListenerMixin }               from 'reflux';
import _                               from 'lodash';
import Mozaik                          from 'mozaik/browser';
import * as harvest from 'harvest-v2';


class Timers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timers: []
        };
    }

    getApiRequest(){
        /* This could probably be done a bit more efficiently.*/
        harvest.timeEntries.list()
        return {
            id: `harvest.timers.${ user }`,
            params: {
                repository: repository
            }
        };
    }
    render() {
        return (
            <div className="list__item harvest__timer">
                <p>Hello, world</p>
            </div>
        );
    }
}

Timers.displayName = 'Harvest Timers';

Timers.propTypes = {
    accountId: PropTypes.object.isRequired

};


export default Timers;
