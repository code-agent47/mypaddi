import {SUBMIT_REQUEST,SUBMIT_SUCCESSFUL,SUBMIT_FAILED} from '../constants';
import axios from '../../axios/index';
import {alertActions} from '../actions/AlertActions';
import {history} from '../../helpers/History';
import Cookies from 'js-cookie';

export const SubmitActionsPOST = (url,value) => {
  return (dispatch) => {
      dispatch({ type: SUBMIT_REQUEST });
      dispatch(alertActions.clear());
      return axios
          .post(url, value)
          .then((response) => {
            console.log("response",response);
            if (response.data.error === false) {
                dispatch({
                    type: SUBMIT_SUCCESSFUL,
                    response: response.data.data,
                });
                dispatch(alertActions.success(response.data.message));

            } else {
                dispatch({
                    type: SUBMIT_FAILED,
                });
                dispatch(alertActions.error(response.data.message));
            }
          })
          .catch((error) => {
            console.log("response",error.response);
            if(!error.response){
              dispatch({
                  type: SUBMIT_FAILED
              });
              dispatch(alertActions.error("Network Error, try again!!!"));
            }
            else{
              dispatch({
                  type: SUBMIT_FAILED
              });
              dispatch(alertActions.error(error.response.data.message));
              if(error.response.data.message === "UNAUTHORIZED."){
                    sessionStorage.removeItem("userEmail");
                    Cookies.remove("userEmail");
                    history.replace('/');
              }
            }
        });
  };
};

export const SubmitActionsUpload = (url,value) => {
    return (dispatch) => {
        dispatch(alertActions.clear());

        return fetch(`${url}`, {
            method: 'post',
            body: value,
            headers: {
              'Accept': 'application/json',
            //   'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${sessionStorage.getItem("userEmail")}`
            },
          })
          .then(parseJSON)
          .then((response) => {
                if (response.error === false) {
                    dispatch(alertActions.success(response.data.message));

                }
          })
          .catch((error) => {
                console.log("response",error.response);
                if(!error.response){
                    dispatch(alertActions.error("Network Error, try again!!!"));
                }
                else{
                    dispatch(alertActions.error(error.response.data.message));
                    if(error.response.data.message === "UNAUTHORIZED."){
                            sessionStorage.removeItem("userEmail");
                            Cookies.remove("userEmail");
                            history.replace('/');
                    }
                }
          });
    };
};

export const SubmitActionsGET = (url) => {
    return (dispatch) => {
        dispatch({ type: SUBMIT_REQUEST });
        dispatch(alertActions.clear());
        return axios
            .get(url)
            .then((response) => {
                console.log(response);
                if (response.data.error === false) {
                    dispatch({
                        type: SUBMIT_SUCCESSFUL,
                        response: response.data,
                    });
                    dispatch(alertActions.success(response.data.message));
  
                } else {
                    dispatch({
                        type: SUBMIT_FAILED,
                    });
                    dispatch(alertActions.error(response.data.message));
                }
            })
            .catch((error) => {
              if(!error.response){
                dispatch({
                    type: SUBMIT_FAILED
                });
                dispatch(alertActions.error("Network Error, try again!!!"));
              }
              else{
                dispatch({
                    type: SUBMIT_FAILED
                });
                dispatch(alertActions.error(error.response.data.message));
                if(error.response.data.message === "UNAUTHORIZED."){
                    sessionStorage.removeItem("userEmail");
                    Cookies.remove("userEmail");
                    history.replace('/');
                }
              }
          });
    };
};

export const SubmitActionsPATCH = (url) => {
    return (dispatch) => {
        dispatch({ type: SUBMIT_REQUEST });
        dispatch(alertActions.clear());
        return axios
            .patch(url)
            .then((response) => {
                console.log(response);
                if (response.data.error === false) {
                    dispatch({
                        type: SUBMIT_SUCCESSFUL,
                        response: response.data,
                    });
                    dispatch(alertActions.success(response.data.message));
  
                } else {
                    dispatch({
                        type: SUBMIT_FAILED,
                    });
                    dispatch(alertActions.error(response.data.message));
                }
            })
            .catch((error) => {
              if(!error.response){
                dispatch({
                    type: SUBMIT_FAILED
                });
                dispatch(alertActions.error("Network Error, try again!!!"));
              }
              else{
                dispatch({
                    type: SUBMIT_FAILED
                });
                dispatch(alertActions.error(error.response.data.message));
                if(error.response.data.message === "UNAUTHORIZED."){
                    sessionStorage.removeItem("userEmail");
                    Cookies.remove("userEmail");
                    history.replace('/');
                }
              }
          });
    };
};

export const SubmitActionsPUT = (url, value) => {
    return (dispatch) => {
        dispatch({ type: SUBMIT_REQUEST });
        dispatch(alertActions.clear());
        return axios
            .put(url, value)
            .then((response) => {
                console.log(response);
                if (response.data.error === false) {
                    dispatch({
                        type: SUBMIT_SUCCESSFUL,
                        response: response.data,
                    });
                    dispatch(alertActions.success(response.data.message));
  
                } else {
                    dispatch({
                        type: SUBMIT_FAILED,
                    });
                    dispatch(alertActions.error(response.data.message));
                }
            })
            .catch((error) => {
              if(!error.response){
                dispatch({
                    type: SUBMIT_FAILED
                });
                dispatch(alertActions.error("Network Error, try again!!!"));
              }
              else{
                dispatch({
                    type: SUBMIT_FAILED
                });
                dispatch(alertActions.error(error.response.data.message));
                if(error.response.data.message === "UNAUTHORIZED."){
                    sessionStorage.removeItem("userEmail");
                    Cookies.remove("userEmail");
                    history.replace('/');
                }
              }
          });
    };
};

function parseJSON(response) {
    return response.json();
}