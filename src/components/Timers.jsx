import React, { Component, PropTypes } from 'react';
import reactMixin                      from 'react-mixin';
import { ListenerMixin }               from 'reflux';
import _                               from 'lodash';
import Mozaik                          from 'mozaik/browser';


class Timers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timers: []
        };
    }

    getApiRequest(){
        let {  } = this.props;
        return {
            id: `harvest.timers.${  }`,
            params: {
                repository: repository
            }
        };
    }
    render() {
        const { timer } = this.props;

        let authorAvatar = null;
        let authorNode   = null;

        if (timer.commit) {
            const { commit } = timer;

            if (commit.author) {
                authorAvatar = (
                    <a href={commit.author.html_url} target="_blank" className="github__timer__avatar">
                        <img src={commit.author.avatar_url} />
                    </a>
                );

                authorNode = (
                    <span>
                        by <a href={commit.author.html_url} target="_blank">{commit.author.login}</a>
                    </span>
                );
            }
        }

        return (
            <div className="list__item harvest__timer">
                {authorAvatar}
                <a href={timer._links.html} target="_blank">{timer.name}</a>&nbsp;
                {authorNode}
            </div>
        );
    }
}

Timers.displayName = 'Branch';

Timers.propTypes = {
    timer: PropTypes.object.isRequired
};


export default Timers;
