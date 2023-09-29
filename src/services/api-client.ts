import axios, {CanceledError} from 'axios';

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '00dcc2467cb946abaedd253f56f51a66'
    }
});

export {CanceledError}