import React from 'react'
import {connect,Provider} from 'react-redux';
import {Link,BrowserRouter,Route,Switch} from 'react-router-dom';
import navbar from './layouts/navbar';
class App  extends React.Component{
    render(){
          return(
                <div>
                        <navbar />
                 </div>
          )
    }
}

export default App
