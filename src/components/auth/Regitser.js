import React  from 'react'
import PropTypes from 'prop-types'
import {Register_User}  from '../../actions/auth';
import {connect} from 'react-redux';
import { userInfo } from 'os';

class Register extends React.Component{
   
    state={
        name:'',
        email:'',
        password:'',
        password2:'',
    }

    onChange=e=>{
      let name =  e.target.name;
      let value=  e.target.value;
      this.setState({
          [name]: value
      })     
      console.log(this.state)
    }
   
    onSubmit =  e =>{
        e.preventDefault();
        const {password,password2,email,name} = this.state;
        if(password!==password2){
            alert("passwords do not match")
        }else{
             console.log(this.props)
            this.props.Register_User({name,email,password})
        }
    }

    render(){
        return (
        <div className="container">
        <h1 style={{'textAlign':'center'}}>Register</h1>  
        <form onSubmit={(e)=> this.onSubmit(e)}>
<div class="form-group">
  <label   for="exampleInputEmail1">Email address</label>
  <input  onChange={(e)=> this.onChange(e)}  name="email" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
  <label for="Name">Enter name</label>
  <input  onChange={(e)=> this.onChange(e)} type="text" name="name" class="form-control" id="exampleInputPassword1" placeholder="name"/>
</div>
<div class="form-group">
  <label for="exampleInputPassword1">Enter Password</label>
  <input  onChange={(e)=> this.onChange(e)} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
</div>
<div class="form-group">
  <label for="exampleInputPassword1">Confirm Password</label>
  <input onChange={(e)=> this.onChange(e)}  type="password" name="password2" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
</div>

<button type="submit"  class="btn btn-primary">Register</button>
</form>
      </div>  
    )
}
}

Register.propTypes  = {
    Register_User:PropTypes.func.isRequired
}

const mapStateToProps =(state)=>({
     token:state.token
})

export default connect(mapStateToProps,{Register_User})(Register)
