import { REGISTER } from "./actionType"

const initialState = {
    isResiter : false
}
export const resiReducer = (state = initialState, {type , payload}) =>{
    switch(type){
      case REGISTER :{
        return {
            ...state,
            isResiter : true

        }
      }

        default :
         return state
    }

}


  