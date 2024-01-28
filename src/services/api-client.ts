import axios, {CanceledError} from 'axios';

export default axios.create ({
    params:{
        key: '49e8b1e8199a48c2be8c2b6ebd07645c'
    },
    baseURL: 'https://api.rawg.io/api',
    headers: {}
});

export {CanceledError}