export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '24ea6825-5aa9-49fa-bcea-9711d3f5975c', // Application (client) ID
            authority: 'https://login.microsoftonline.com/929a6462-3b18-4913-821d-21abf669c438', // Directory (tenant) ID
            redirectUri: 'http://localhost:4200', // RedirectURI
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    }
};
