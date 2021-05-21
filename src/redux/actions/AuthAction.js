import {AUTH_REQUEST,AUTH_USER,AUTH_FAILED} from '../constants';
import {LOGIN_URL,FORGOT_PASSWORD_URL,RESET_PASSWORD_URL} from '../../config/Routes';
import axios from '../../axios';
import {history} from '../../helpers/History';
import {alertActions} from './AlertActions';
import Cookies from 'js-cookie';


export const signIn = (credentials) => {
  return (dispatch) => {
      dispatch({ type: AUTH_REQUEST });
      dispatch(alertActions.clear());
      return axios
          .post(LOGIN_URL, credentials)
          .then((response) => {
              if (response.data.error === false) {
                  dispatch({
                      type: AUTH_USER,
                      response: response.data,
                  });
                  sessionStorage.setItem("userEmail",response.data.data.authToken);
                  if(credentials.remember_me){
                      console.log("seen");
                      Cookies.set('userEmail',response.data.data.authToken,{ expires: 7 })
                  }
                  history.replace('/dashboard');
              } else {
                  dispatch({
                      type: AUTH_FAILED,
                  });
                  dispatch(alertActions.error(response.data.message));
              }
          })
          .catch((error) => {
              if(!error.response){
                dispatch({
                    type: AUTH_FAILED
                });
                dispatch(alertActions.error("Network Error, try again!!!"));
              }
              else{
                dispatch({
                    type: AUTH_FAILED
                });
                dispatch(alertActions.error(error.response.data.message));
              }
          });
  };
};

export const forgotPassword = (credentials) => {
    return (dispatch) => {
        dispatch({ type: AUTH_REQUEST });
        dispatch(alertActions.clear());
        return axios
            .get(`${FORGOT_PASSWORD_URL}/${credentials}`)
            .then((response) => {
                if (response.data.error === false) {
                    dispatch({
                        type: AUTH_USER,
                        response: response.data,
                    });
                    dispatch(alertActions.success(response.data.message));
                } else {
                    dispatch({
                        type: AUTH_FAILED,
                    });
                    dispatch(alertActions.error(response.data.message));
                }
            })
            .catch((error) => {
                if(!error.response){
                  dispatch({
                      type: AUTH_FAILED
                  });
                  dispatch(alertActions.error("Network Error, try again!!!"));
                }
                else{
                  dispatch({
                      type: AUTH_FAILED
                  });
                  dispatch(alertActions.error(error.response.data.message));
                }
            });
    };
};

export const resetPassword = (credentials) => {
    return (dispatch) => {
        dispatch({ type: AUTH_REQUEST });
        dispatch(alertActions.clear());
        return axios
          .post(RESET_PASSWORD_URL, credentials)
            .then((response) => {
                if (response.data.error === false) {
                    dispatch({
                        type: AUTH_USER,
                        response: response.data,
                    });
                    dispatch(alertActions.success(response.data.message));
                } else {
                    dispatch({
                        type: AUTH_FAILED,
                    });
                    dispatch(alertActions.error(response.data.message));
                }
            })
            .catch((error) => {
                if(!error.response){
                  dispatch({
                      type: AUTH_FAILED
                  });
                  dispatch(alertActions.error("Network Error, try again!!!"));
                }
                else{
                  dispatch({
                      type: AUTH_FAILED
                  });
                  dispatch(alertActions.error(error.response.data.message));
                }
            });
    };
};