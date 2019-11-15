import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://192.168.1.175:3000/',
    timeout: 20000
});

const get = {
    getGenjinzhong(params, callback) {
        instance.get('/gjz?page=' + params.page).then(data => callback(data));
    }
};

export default {
    get(fnName, params, callback) {
        get[fnName](params, callback);
    }
};
