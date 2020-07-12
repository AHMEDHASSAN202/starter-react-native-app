import { CHANGE_TITLE } from "../ActionTypes";

export default (state = {}, action) => {
    switch (action.TYPE) {
        case CHANGE_TITLE: 
            return {...state, title: action.payload}
        default: 
            return state;    
    }
}