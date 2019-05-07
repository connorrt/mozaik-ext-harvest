import request from 'superagent-bluebird-promise'
import Promise from 'bluebird'
import _ from 'lodash'
import chalk from 'chalk'
import config from './config'
import harvest_api_v2 from 'harvest_api_v2'


/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {
    const count = 0;

    mozaik.loadApiConfig(config);

    let Harvest = require('harvest_api_v2').default;
    let harvest = new Harvest({
        account_ID: config.get('harvest.account_ID'),
        access_token: config.get('harvest.access_token'),
        user_agent: config.get('harvest.user_agent'),
    });

    harvest.clients.listBy({
        is_running: 'true',
    }).then((result) => {
        console.log(result);
    });

    return {
        sampleMethod() {
            return Promise.resolve({ count });
    /*
        if (config.get('harvest.access_token') !== '') {
            req.set('Authorization', `token ${config.get('github.token')}`);
        }
    }*/
        }
    };
};
export default client
