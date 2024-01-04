import { Client , Account} from 'appwrite'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65965a2e6d4f862b841d');

export const account = new Account(client);

export default client