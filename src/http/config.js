// Axios相关配置
import { baseUrl } from '@/utils/globals'

export default {
    method: 'get',
    baseUrl: baseUrl, // 基础URL前缀
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    data: {},
    timeout: 10000,
    withCredentials: true,  // 携带凭证
    responseType: 'json'
}