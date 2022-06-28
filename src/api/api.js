import axios from 'axios'
const BASE_API = 'https://api.b7web.com.br/devbarber/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default {
    checkToken: async (token) => {

        let respo = null
        const req = await axios.post(`${BASE_API}/auth/refresh`, {
            token: token
        }).then((resp) => {
            respo = resp.data
            return (respo)
        })
        return respo
    },
    signIn: async (email, password) => {
        let respo = null
        const req = await axios.post(`${BASE_API}/auth/login`, {
            email: email,
            password: password
        }).then((resp) => {
            respo = resp.data
            return (respo)
        })
        return respo
    },
    signUp: async (nome, email, password) => {
        let respo = null
        const req = await axios.post(`${BASE_API}/user`, {
            name: nome,
            email: email,
            password: password
        }).then((resp) => {
            respo = resp.data
            return (respo)
        })
        return respo

    },
    logOut: async () => {
        let respo = null
        const token = await AsyncStorage.getItem('token')
        const req = await axios.post(`${BASE_API}/auth/logout`, {
            token: token
        }).then((resp) => {
            AsyncStorage.removeItem('token')
            respo = resp.data
            return (respo)
        })
        AsyncStorage.removeItem('token')

        return respo

    },
    getBarbes: async (lat = null, long = null, address = null) => {
        console.log(lat, long, address)
        const token = await AsyncStorage.getItem('token')
        const req = await axios.get(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng${long}&address=${address}`)
        return req.data
    },
    getBarbe: async (id) => {
        const token = await AsyncStorage.getItem('token')
        const req = await axios.get(`${BASE_API}/barber/${id}?token=${token}`)
        return(req.data.data)
    }
}