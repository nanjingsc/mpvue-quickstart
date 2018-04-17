import wx from './wx'
import Fly from 'flyio/dist/npm/wx'
import { getStorage } from './wechat'
var qs = require('qs');

const fly = new Fly

fly.config.timeout = 30 * 1000
fly.config.baseURL = 'https://jwb.sc-edu.com/api/'
fly.config.headers = {
    'content-type': 'application/x-www-form-urlencoded',
    "INFO":"jwb-mp-joinhelper"}

fly.interceptors.request.use(function (request){
    console.table(request)

    // 因为服务器问题，修改为表单提交格式
    request.body =  qs.stringify(request.body)

    // 请求带上cookie
    return this.await(
        getStorage('cookie').then( ({ data }) =>{
            request.headers = Object.assign(request.headers, {'Cookie':'sc_jwb='+data})
            return request
        }).catch( () => {
            return request
        })
    )
})

fly.interceptors.response.use(
    (response, promise) => {

        if ('1' === response.data.ret && response.data.data ){
            return promise.resolve(response.data.data)
        }else{

            return promise.reject({message: response.data.err_msg})
        }
        return promise.resolve(response.data)
    },
    (err, promise) => {
        return promise.reject({message: '请求错误'})
    }
)

export default fly



