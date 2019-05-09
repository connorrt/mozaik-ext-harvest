import convict from 'convict';


const config = convict({
    harvest: {
        account_ID: {
            doc:     'The ID of the account you want to pull from.',
            default: '',
            format:  String,
            env:     'HARVEST_ACCOUNT_ID'
        },
        access_token: {
            doc:     'The harvest API token.',
            default: '',
            format:  String,
            env:     'HARVEST_ACCESS_TOKEN'
        },
        user_agent: {
            doc: 'Who is using this? (name/email)',
            default: 'Mozaik Dashboard',
            format: String,
            env: 'HARVEST_USER_AGENT',
        },
        baseUrl: {
            doc: 'Base URL',
            default: 'https://api.harvestapp.com/api/v2/',
            format: String,
        }
    }
});


export default config;
