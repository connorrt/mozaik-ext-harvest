import React, {useState, useEffect} from 'react';
import request from 'superagent-bluebird-promise'
import Promise from 'bluebird'
import _ from 'lodash'
import chalk from 'chalk'
import config from './config'
import fetch from 'node-fetch'

/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {

    mozaik.loadApiConfig(config);
    const buildApiRequest = (path, params) => {
        const url = config.get('harvest.baseUrl');
        const req = request
            .get('${url}${path}')
            .set('Authorization', ' Bearer ' + config.get('harvest.access_token'))
            .set('Harvest-Account-Id', config.get('harvest.account_ID'))
            .set('User-Agent', config.get('harvest.user_agent'))
    };

    const activeTimers = (params, buffer) => {
        return buildApiRequest('/users/me.json', params)
            .then(res => {
                buffer.timers = buffer.timers.concat(res.body)
                console.log(buffer.timers);
                return buffer.timers;
            })
    };

    const apiCalls = {

        activeTimers(params) {
            activeTimers(params, {
                timers: []
            })
                .then(timers => {
                    return timers;
                })
        }
    };

    //const [data, setData] = useState(null);
    //const [error, setError] = useState(false);

    /*
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': ' Bearer ' + config.get('harvest.access_token'),
                'Harvest-Account-Id': config.get('harvest.account_ID'),
                'User-Agent': config.get('harvest.user_agent')
            }
        }).then(async (res) => {
            const resData = await res.json();
            const d = resData;
            setData({

            });
            console.log(d);
        }).catch(err => {
            console.error(err);
            setError(true);
        });
    }, []);


    function getTimers(url = '', data = {}) {
        return
    }

    getTimers('https://api.harvestapp.com/api/v2/users/me.json', {})
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
*/
    return apiCalls;
};
export default client;
