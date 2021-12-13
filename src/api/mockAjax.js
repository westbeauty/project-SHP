//对axios进行二次封装
import axios from 'axios';

// 引入进度条
import nprogress from 'nprogress';
//引入进度条样式
import 'nprogress/nprogress.css';

const Mockrequests = axios.create({
    baseURL:'/mock',
    timeout:5000,
});
//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之后做一些事情
Mockrequests.interceptors.request.use(
    (config)=>{
        nprogress.start();
        return config
    }
)

//响应拦截器
Mockrequests.interceptors.response.use(
    (res)=>{
        nprogress.done();
        return res.data
    },
    (error)=>{
        return Promise.reject(new Error('faile'))
    }
);

export default Mockrequests;