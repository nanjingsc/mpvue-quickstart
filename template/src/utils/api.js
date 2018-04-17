import request from './request'
import { setStorage } from './wechat'

// 登录成功后，自动保存用户cookie，同时自动请求机构数
function userLogin(code, phone) {
    return request.post('')
}

function branches() {
    return request.post('')
}

const SCApi = {

    install (Vue, options) {

        const api = {
            userLogin: userLogin,
            branches: branches
        }

        Vue.prototype.$api = api
    }
}


export default SCApi
