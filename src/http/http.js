import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.2.250/',
    timeout: 1000
});

const get = {
    getNews(callback) {
        // instance.get('http://192.168.2.250/news').then((data) => {
        //     callback(data);
        // });
        callback({
            data: [
                {title: 'adsfadsf', 'link': 'adsfadf'},
                {title: 'adsfadsf', 'link': 'adsfadf'},
                {title: 'adsfadsf', 'link': 'adsfadf'},
                {title: 'adsfadsf', 'link': 'adsfadf'}
            ]
        });
    }
};

export default {
    get(fnName, callback) {
        get[fnName](callback);
    }
};
