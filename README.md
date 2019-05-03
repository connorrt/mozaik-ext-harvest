# Mozaïk GitHub widgets

[![License][license-image]][license-url]
[![Travis CI][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Dependencies][gemnasium-image]][gemnasium-url]
[![Coverage Status][coverage-image]][coverage-url]
![widget count][widget-count-image]

[![Deploy][heroku-image]][heroku-url]

This repository contains some GitHub widgets to use with [Mozaïk](https://github.com/plouc/mozaik).

## Github Client Configuration

In order to use the Mozaïk harvest widgets, you should configure its **client**.
It's not required that you provide a token for authentication, but then
you'll only be able to see public repos and the rate limit will apply.

### parameters

key       | env key          | required | default                | description
----------|------------------|----------|------------------------|----------------------------
`token`   | HARVEST_API_TOKEN | no       | ''                     | *harvest authentication token*
`baseUrl` | HARVEST_BASE_URL  | no       | https://api.harvest.com | *harvest api url* (useful for enterprise)

### usage

```javascript
{
  //…
  api: {
    harvest: {
        baseUrl: ''
        token:   'MY_HARVEST_TOKEN'
    },
  }
}
```

## Widgets

### Github User badge

> Show harvest user badge.

![harvest user badge](https://raw.githubusercontent.com/plouc/mozaik-ext-github/master/preview/github.user_badge.png)

#### parameters

key    | required | description
-------|----------|--------------------------
`user` | yes      | *harvest user identifier*

#### usage

```javascript
{
  type: 'harvest.user_badge',
  user: 'plouc',
  columns: 1, rows: 1, x: 0, y: 0
}
```

[license-image]: https://img.shields.io/github/license/plouc/mozaik-ext-github.svg?style=flat-square
[license-url]: https://github.com/plouc/mozaik-ext-github/blob/master/LICENSE.md
[travis-image]: https://img.shields.io/travis/plouc/mozaik-ext-github.svg?style=flat-square
[travis-url]: https://travis-ci.org/plouc/mozaik-ext-github
[npm-image]: https://img.shields.io/npm/v/mozaik-ext-github.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/mozaik-ext-github
[gemnasium-image]: https://img.shields.io/gemnasium/plouc/mozaik-ext-github.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/plouc/mozaik-ext-github
[coverage-image]: https://img.shields.io/coveralls/plouc/mozaik-ext-github.svg?style=flat-square
[coverage-url]: https://coveralls.io/github/plouc/mozaik-ext-github
[widget-count-image]: https://img.shields.io/badge/widgets-x10-green.svg?style=flat-square
[heroku-image]: https://www.herokucdn.com/deploy/button.svg
[heroku-url]: https://heroku.com/deploy?template=https://github.com/plouc/mozaik-ext-github/tree/demo
