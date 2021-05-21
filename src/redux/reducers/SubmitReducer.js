import {SUBMIT_REQUEST,SUBMIT_SUCCESSFUL,SUBMIT_FAILED} from '../constants';

const initialState = {
    submitting: false,
    results: null
}

const submitReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUBMIT_REQUEST:
      return Object.assign({}, state, {
        submitting: true,
      })
      case SUBMIT_FAILED:
      return Object.assign({}, state, {
        submitting: false,
        results: null
      });
      case SUBMIT_SUCCESSFUL:
      return Object.assign({}, state, {
        submitting: false,
        results: action.response
      });
      default:
        return state;
    }
}
  
export default submitReducer;