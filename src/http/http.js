import axios from 'axios';
import querystring from 'querystring';


const instance = axios.create({
    baseURL: 'http://192.168.1.196:3000/',
    timeout: 20000
});

const get = {
    getGenjinzhong(params, callback) {
        instance.get('/gjz?page=' + params.page).then(data => callback(data));
    },
    zuijin(params, callback) {
        instance.get('/zuijin?la=' + params.la + '&lo=' + params.lo).then(data => callback(data));
    },
    mdxq(params, callback) {
        instance.get('/mendianxiangqing?id=' + params.id).then(data => callback(data));
    },
    getdongxi(params, callback) {
        instance.get('/dongxi?leibiebianhao=' + params.leibiebianhao).then(data => callback(data));
    },
    getCar(params, callback) {
        instance.get('http://www.aiqianduan.com:7897/cars?' + querystring.stringify({
            page: params.page,
            color: params.color.join('v'),
            exhaust: params.exhaust.join('v'),
            engine: params.engine.join('v'),
            fuel: params.fuel.join('v')
        })).then(data => callback(data));
    }
};

export default {
    get(fnName, params, callback) {
        get[fnName](params, callback);
    }
};
