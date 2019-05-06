import request from 'superagent-bluebird-promise'
import Promise from 'bluebird'
import _ from 'lodash'
import chalk from 'chalk'
import config from './config'
import * as Harvest from 'harvest-v2'


/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {

    mozaik.loadApiConfig(config);

    let harvest = new Harvest({
        account_ID: config.get('harvest.account_ID'),
        access_token: config.get('harvest.access_token'),
        user_agent: config.get('harvest.user_agent'),
    });

    return apiCalls

    if (config.get('harvest.access_token') !== '') {
        req.set('Authorization', `token ${config.get('github.token')}`);
    }
}


export default client
