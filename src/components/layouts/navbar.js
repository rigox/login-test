import React ,{Fragment} from 'react'
import {Link} from  'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../actions/auth';
import PropTypes from 'prop-types'


const Nav = ({auth:{isAuthenticated,loading},logout}) => {
    const authLinks = (
        <ul>
        <li>
          <a onClick={logout} className="">
          <i className="fas fa-sign-out-alt">{''}</i>
          <span className="hide-sm">Logout</span></a>
        </li>
    </ul>
    )
    
    const guestLinks = (
        <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
    )
    
    

    return (
        <header>
        <nav id="navbar">
           <div className="container">
            <h1>Test</h1>
            {!loading && (<Fragment>{isAuthenticated ? authLinks:guestLinks}</Fragment>)}
           </div>
        </nav>
        </header>
    )
}

Nav.propTypes = {
    logout:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
}


const mapStateToProps = state =>({
    auth:state.auth
  })

export default connect(mapStateToProps,{logout})(Nav)
