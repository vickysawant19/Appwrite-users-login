import { Client , Account, Databases} from 'appwrite'

const client = new Client();


export const DATABASE_ID = '6598e5aa7d0f55513cf8';
export const COLLECTION_ID = '6598e5b879d9e3193277';

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65965a2e6d4f862b841d');

export const account = new Account(client);
export const db = new Databases(client);


export default client