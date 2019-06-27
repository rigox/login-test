import React  ,{useState} from 'react'
import PropTypes from 'prop-types'
import {login} from '../../actions/auth';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

const Login = ({login,isAuthenticated}) => {
  const   [formData,setFormData] = useState({
       email:'',
       password:'',
  });


  const onChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
     }


  const onSubmit = async e => {
           const {email,password}  =  formData;
            console.log(email)
            e.preventDefault();
            login({email,password})
}


if(isAuthenticated){
    return <Redirect to="/dashboard" />
 }
  
  
    return (
        <div className="container">
          <h1 style={{'textAlign':'center'}}>Login</h1>  
          <form onSubmit={e=> onSubmit(e)}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={e=> onChange(e)} name="email" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={e=> onChange(e)}type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Login</button>
</form>

        </div>  
    )
}

Login.propTypes  ={
    login:PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

const  mapStateToProps =  state =>({
    isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps,{login})(Login)
