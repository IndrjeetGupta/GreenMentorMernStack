import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionType";

  // Initial State
  const initialState = {
    token: "",
    isAuth: false,
    loading: false,
    error: null,
    success: true,
    visu: true
   
  };
  
  // Reducer
  export const authReducer = (state = initialState, {type, payload}) => {
    switch(type){
  
      case LOGIN_REQUEST:{
        return {
          ...state,
          loading: true,
          error: null,
          success: true
        }
  
      }
  
      case LOGIN_SUCCESS:{
        return {
          ...state,
          token: payload,
          isAuth:true,
          loading: false,
          error: null,
          success: false
        }
  
      }
  
      case LOGIN_FAILURE:{
        return {
          ...state,
          token: '',
          isAuth:false,
          loading: false,
          error: payload,
          success: false
        }
      }
  
      case LOGOUT :{
        return {
          ...state,
          isAuth: true,
          visu: false
        }
      }
      default :
      return state
    }
   
  };
  