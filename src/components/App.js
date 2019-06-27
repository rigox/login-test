import React ,{useEffect} from 'react'
import Nav from './layouts/navbar'
import {connect,Provider} from 'react-redux';
import {Link,BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './auth/Login';
import Register  from './auth/Regitser';
import Home from './layouts/Home'
import store from '../store';
import {loadUser} from '../actions/auth'
import  '../App.css';


const App =()=>{
    useEffect(()=>{
        store.dispatch(loadUser());
    },[]);

          return(
              <Provider store={store}>
                <div>
                    <BrowserRouter>
                    <Nav />
                    <Route  exact path="/" component={Home}  />
                     <Switch>
                        <Route  path="/login" component={Login} />
                        <Route  path="/register" component={Register} />          
                     </Switch>
                    </BrowserRouter>
                 </div>
           </Provider>
          )
    }


export default App
