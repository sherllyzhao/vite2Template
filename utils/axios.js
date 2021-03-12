// 参数的数据格式分两种
// 1.json对象类型  {name:1,password:1356565}
// 2.字符串类型    name:1,password:1356598   (需要下载qs插件进行转换)

import axios from 'axios'
import Qs from 'qs'    //（如果只是get请求就不需要引qs）


// import { Message } from 'element-ui'  //引入element中的弹窗，这个不是必须的可根据项目来
axios.defaults.withCredentials = false;  //false  不跨域  true 跨域
// axios.defaults.headers.common['token'] = localstorage.getItem('token'); //设置请求头，这个是不是必须的

export default function (url, params, method = 'get', type = "json") {
    //设置请求头
    if (method == "post") {
        if (type == "json") {  //参数是json类型
            axios.defaults.headers.post['content - type'] = 'application/json'
        } else {  //参数是字符串类型
            axios.defaults.headers.post['content - type'] = 'application/x-www-form-urlencoded'
            params = Qs.stringify(params)
        }
    }

    // axios.interceptors.request.use(function (response) {
    // 	if (store.getters.Token) {
    // 	  response.headers.Authorization= store.getters.Token
    // 	}
    //     return response;
    // }, function (error) {
    //     return Promise.reject(error);
    // });

    // axios.interceptors.response.use(function (response) {
    //     if(response.data.code==1000000){
    //         store.state.libraryName='';
    //         store.state.libraryId='';
    //         store.state.userName='';
    //         store.state.userId='';
    //         store.state.userAuth='';
    //         sessionStorage.removeItem('libraryId');
    //         sessionStorage.removeItem('libraryName');
    //         sessionStorage.removeItem('userName');
    //         sessionStorage.removeItem('userId');
    //         sessionStorage.removeItem('userAuth');
    //         sessionStorage.removeItem('Token');
    //         sessionStorage.removeItem('permissions');
    //         sessionStorage.removeItem('breadcrumbHistory');
    //         app.$router.push({ path: '/login'});
    //     }
    //     if(response.data.access=='unauthorized'){
    //         console.log(response.data.access)
    //         app.$notify.error({
    //                 title: '错误',
    //                 message: '你没有权限进行此项操作！！！'
    //         });
    //         throw "你没有权限进行此项操作！！！";
    //     }
    //     return response;
    // }, function (error) {
    //         console.log(error)
    //         console.log(error.response.status)
    //             if(error)
    //             this.$router.replace({path: '/403'})
    //     return Promise.reject(error);
    // });

    //发送请求
    return new Promise((resolve, reject) => {
        axios({
            url,
            method,
            type,
            data: params,
            timeout: 6000,
        }).then(result => {
            resolve(result.data)
        }).catch(err => {
            reject(err)
        })
    })
}
