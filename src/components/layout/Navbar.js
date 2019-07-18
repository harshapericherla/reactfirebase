import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLink from './SignedInLink';
import SingedOutLink from './SingedOutLink';
const NavBar = () => {
    return(
        <nav className = "nav-wrapper grey darken-3">
             <div className="container">
                 <Link to='/' className="brand-logo">MarioPlan</Link>
                 <SignedInLink />
                 <SingedOutLink />
             </div>
        </nav>
    )
}

export default NavBar;