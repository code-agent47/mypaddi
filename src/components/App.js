import React, { Component, Fragment } from 'react';
import { Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './pages/Homepage';
class App extends Component{

   render(){
      return(  
        <Fragment>
            <Switch>                    
                <Route exact path="/" component={Homepage} />
            </Switch>
        </Fragment>
      )
   }

}

function mapStateToProps(state){
  console.log(state);
  return{
      authState: state.signinReducer,
      submitState: state.submitReducer
  }
}

export default connect(mapStateToProps,
  {}) (App);
