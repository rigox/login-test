import {LOGIN,LOGOUT,REGISTER,LOAD_USER} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
axios.defaults.baseURL = "http://localhost:3005"


export const loadUser = () => async dispatch =>{
if(localStorage.token){
   setAuthToken(localStorage.token)
}
try {
    const res =  await axios.get('/api/auth');
    dispatch({
            type:LOAD_USER,
            payload:res.data
    })
} catch (err) {
    console.log(err)
}

}



export const Register_User=({name,email,password})=>  async dispatch =>{ 
const config = {
      headers:{'Content-Type':"application/json"}
}
const body  =  JSON.stringify({name,email,password})
try {
    const res = await axios.post('/api/users/register',body,config)
    dispatch({
        type:REGISTER,
        payload:res.data
    })

    dispatch(loadUser())

} catch (err) {
    console.log(err)
}
}

export const login=({email,password})=> async dispatch =>{

    const body  = JSON.stringify({email,password})

    const config  = {
         headers:{'Content-Type':"application/json"}
    }

    try {
        const res = await axios.post('/api/auth/login',body,config)

        dispatch({
             type:LOGIN,
             payload:res.data
        })

        dispatch(loadUser())

    } catch (err) {
        console.log(err)
    }

}

export const logout = () => dispacth =>{
console.log("hello")
    dispacth({
         type:LOGOUT
    })
}