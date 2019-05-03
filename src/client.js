import request from 'superagent-bluebird-promise'
import Promise from 'bluebird'
import _ from 'lodash'
import chalk from 'chalk'
import config from './config'


/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {

    mozaik.loadApiConfig(config)

    const buildApiRequest = (path, params) => {
        const url = config.get('harvest.baseUrl')
        const req = request.get(`${url}${path}`)

        const paramsDebug = params ? ` ${JSON.stringify(params)}` : ''
        mozaik.logger.info(chalk.yellow(`[harvest] calling ${url}${path}${paramsDebug}`))

        if (params) {
            req.query(params)
        }

        if (config.get('harvest.token') !== '') {
            req.set('Authorization', `token ${config.get('harvest.token')}`)
        }

        return req.promise()
    }

    const repositoryCommits = (params, buffer) => {
        return buildApiRequest(`/repos/${params.repository}/commits`, params)
            .then(res => {
                buffer.commits = buffer.commits.concat(res.body)

                // checks if there's an available next page in response link http header
                if (res.headers.link && /&page=(\d+)>; rel="next"/.test(res.headers.link) === true && buffer.commits.length < buffer.max) {
                    buffer.page = parseInt(/&page=(\d+)>; rel="next"/.exec(res.headers.link)[1])

                    return repositoryCommits(params, buffer)
                } else {
                    return buffer.commits
                }
            })

    }

    return apiCalls
}


export default client
