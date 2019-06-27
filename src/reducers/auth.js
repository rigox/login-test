import {LOGIN,LOGOUT,REGISTER,LOAD_USER} from '../actions/types'

const initalState  ={
    token:localStorage.getItem('token'),
    user:null,
    isAuthenticated:false,
    loading:true
}

export default  function(state=initalState,action){
    const {type,payload} =  action
    switch(type){
        case LOGIN:
        localStorage.setItem('token',payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false
            }
        case LOGOUT:
        return {
            ...state,
            token:null,
            isAuthenticated:false,
            loading:false
        }

        case REGISTER:
        localStorage.setItem('token',payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false
            }
        case LOAD_USER:
          return{
              ...state,
              isAuthenticated:true,
              user:payload,
              loading:false
          }

        default:
            return state;
    }
}

