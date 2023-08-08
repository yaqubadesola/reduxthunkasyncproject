import { FETCH_STUDENT_ERROR, FETCH_STUDENT_SUCCESS, FETCH_STUDENT_START } from "../actions";

const initailState = {
    students:[],
    isLoading:false,
    error:null
}

const studentReducer = (state = initailState, action) => {
    switch (action.type) {
        case FETCH_STUDENT_START:
            return {
                ...state, isLoading:true
            }
        case FETCH_STUDENT_SUCCESS:
            return {
                ...state, 
                students: action.payload,
                isLoading:false
            }
        case FETCH_STUDENT_ERROR:
            return {
                ...state, error: action.payload
            }
        
        default:
            return state;
    }
}

export {initailState, studentReducer}