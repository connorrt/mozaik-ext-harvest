import convict from 'convict';


const config = convict({
    harvest: {
        baseUrl: {
            doc:     'The harvest API base url.',
            default: 'https://api.harvestapp.com/v2',
            format:  String,
            env:     'HARVEST_BASE_URL'
        },
        token: {
            doc:     'The harvest API token.',
            default: '',
            format:  String,
            env:     'HARVEST_API_TOKEN'
        }
    }
});


export default config;
