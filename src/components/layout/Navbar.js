import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLink from './SignedInLink';
import SingedOutLink from './SingedOutLink';
import {connect} from 'react-redux';

const NavBar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLink /> : <SingedOutLink />
    return(
        <nav className = "nav-wrapper grey darken-3">
             <div className="container">
                 <Link to='/' className="brand-logo">MarioPlan</Link>
                 { links }
             </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
   console.log(state);
   return {
       auth : state.firebase.auth
   }
}

export default connect(mapStateToProps)(NavBar);