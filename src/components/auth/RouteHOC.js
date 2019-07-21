import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const RouteHOC = (props) => {

     let renderHtml = '';
     let isRouteRedirect = props.firebase.auth.uid === undefined ? true : false;
     renderHtml = isRouteRedirect ? <Redirect to='/signin' />  :<Route {...props}></Route>;

    return renderHtml;
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(RouteHOC);