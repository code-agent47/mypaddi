/* eslint-disable no-shadow */
import React, {memo} from 'react';
import Cookies from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';
import {  useSelector } from 'react-redux';


const PrivateRoute = ({ component, moduleID, ...rest }) => {
 let modules = useSelector(state => state.signinReducer.results.data.modules);
 return(
    <Route {...rest} render={(props) => {
        let sessionKey = sessionStorage.getItem("userEmail");
        let cookie = Cookies.get("userEmail");
        if( !sessionKey && !cookie ){
            return (
                <Redirect to='/' />
            )
        }
        else if(moduleID === "mainlayout"){
            return(
                React.createElement(component, props)
            )
        }
        else{
            let module = modules.map( (module,key) => {            
              if(module.module_uuid === moduleID){
                  return(
                    React.createElement(component, {key}, props)
                  )
              }
              return true;
            });
            return module;
          }
         
    }} />
 )
};

export default memo(PrivateRoute);
