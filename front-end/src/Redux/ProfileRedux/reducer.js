import { PROFILE } from "./actionType"


const initialState = {
    proData : []
}
export const profileReducer = (state = initialState, {type , payload}) =>{
    switch(type){
      case PROFILE :{
        return {
            ...state,
            proData : payload

        }
      }

        default :
         return state
    }

}


  