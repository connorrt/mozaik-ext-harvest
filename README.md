# Mozaïk Harvest widgets (under construction)
This repository contains some Harvest widgets to use with **_version 1_** of [Mozaïk](https://github.com/plouc/mozaik).

## Harvest Client Configuration
In order to use the Mozaïk harvest widgets, you should configure its **client**.
It's not required that you provide a token for authentication, but then
you'll only be able to see public repos and the rate limit will apply.

### parameters
key       | env key          | required | default                | description
----------|------------------|----------|---------------------|----------------------------
`token`   | HARVEST_ACCESS_TOKEN | yes  | ''                  | *harvest authentication token*
`baseUrl` | HARVEST_ACCOUNT_ID  | yes   | ''                  | *harvest account id* 
`baseUrl` | HARVEST_USER_AGENT  | yes   | 'Mozaik Dashboard'  | *device name/email, can be anything* 

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
### Timers
Displays a list of timers that 

#### usage
```javascript
{
  type: 'harvest.timers',
  columns: 1, rows: 1, 
  x: 0, y: 0
}
```

## Changelog
### 1.0.1 and below
Unstable jumble of code. Added... schadenfreude?
### 1.1.0
First real version. Timers added.
