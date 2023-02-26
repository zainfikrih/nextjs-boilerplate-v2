import axios from 'axios'
import https from 'https'
import safeStringify from './stringifyUtil.js'
import { useRouter } from 'next/router'

const baseURL = "https://dummyjson.com"

const axiosApp = axios.create({
  baseURL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})
// axiosApp.defaults.withCredentials = true
// if(refreshToken) {
//   axiosApp.defaults.headers.Cookie = [`refreshToken=${refreshToken}`]
// } else {
//   axiosApp.defaults.headers.Cookie  = [`refreshToken=null`]
// }

/* 
  The below is required if you want your API to return 
  server message errors. Otherwise, you'll just get 
  generic status errors.

  If you use the interceptor below, then make sure you 
  return an "err" (or whatever you decide to name it) message 
  from your express route: 
  
  res.status(404).json({ err: "You are not authorized to do that." })

*/

// const { dispatch } = store

axiosApp.interceptors.request.use(function (config) {
  // const token = store.getState().auth.token
  config.headers['Content-Type'] = 'application/json'
  // config.headers['Access-Control-Allow-Origin'] = 'http://localhost:50005'
  // config.headers['Origin'] = 'http://localhost:50005'
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`
  // } else {
  //   config.headers.Authorization = `null`
  // }
  console.log(`AXIOS Req: ${safeStringify(config)}`)

  return config
})

axiosApp.interceptors.response.use(
  response => {
    console.log(`AXIOS Res: ${safeStringify(response)}`)
    return (response)
  },
  // error => {
  // const router = useRouter()
  // const refreshToken = store.getState().auth.refreshToken
  // const originalRequest = error.config
  // console.log(`AXIOS Error: ${safeStringify(error)}`)
  // if ((((error.response.status === 401 || error.response.status === 403) && originalRequest.url === '/token'))) {
  //   // router.push(`/`)
  //   logout()
  //   window.location = '/'
  //   return Promise.reject(error)
  // }
  // if (((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) && !(window.location.pathname === '/')) {
  //   console.log(`REFRESH TOKEN`)
  //   originalRequest._retry = true
  //   return axiosApp.post('/token', {
  //     "refreshToken": refreshToken
  //   }).then((res) => {
  //     if (res.status === 200) {
  //       dispatch(setToken(res.data.accessToken))
  //       dispatch(setIsLogged(true))
  //       axiosApp.defaults.headers.common['Authorization'] = 'Bearer ' + store.getState().auth.token
  //       return axiosApp(originalRequest)
  //     }
  //   })
  // }
  // return (error)

  // }
)

export default axiosApp