import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://192.168.2.250/',
    timeout: 20000
});

const get = {
    getGenjinzhong(params, callback) {
        instance.get('http://127.0.0.1:3000/gjz?page=' + params.page).then(data => callback(data));
    }
};

export default {
    get(fnName, params, callback) {
        get[fnName](params, callback);
    }
};
