import request from 'superagent-bluebird-promise'
import * as Promise from 'bluebird'
import config from './config'
import _ from 'lodash'
import chalk from 'chalk'

const client = mozaik => {

    const url = 'https://api.harvestapp.com/api/v2/'

    const buildApiRequest = (path, params) => {

        mozaik.loadApiConfig(config)

        const req = request.get(`${url}${path}`)
            .set('Authorization', ' Bearer ' + config.get('harvest.access_token'))
            .set('Harvest-Account-Id', config.get('harvest.account_ID'))
            .set('User-Agent', config.get('harvest.user_agent'))

        if (params) {
            req.query(params)
        }

        return req.promise()
    }

    return {
        timers() {
            return buildApiRequest('users/me.json')
                .then(res => res.body)
                .catch(err => {
                    console.error(err)
                    setError(true)
                });
        },
    }
}

export default client
