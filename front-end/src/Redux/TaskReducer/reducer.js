import { GET_TASK_FAILURE, GET_TASK_REQUEST, GET_TASK_SUCCESS, LOGOUT } from "./actionType";

// Initial State
  const initialState = {
    tasks: [],
    loading: false,
    error: null,
    success: true, 
  };
  
  // Reducer
  export const tasksReducer = (state = initialState, {type, payload}) => {
    switch(type){
  
      case GET_TASK_REQUEST :{
        return {
          ...state,
          loading: true,
          error : null,
          success: false
        }
      }
  
      case GET_TASK_SUCCESS :{
        return {
          ...state,
          tasks: payload,
          loading: false,
          error : null,
          success: false
        }
      }
  
      case GET_TASK_FAILURE :{
        return {
          ...state,
         
          loading: false,
          error : payload,
          success: false
        }
      }


      default :
      return state
    }
  
  
  };
  