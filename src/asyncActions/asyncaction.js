import {getStudentStart, getStudentSuccess, getStudentError} from "../actions"
import api from '../api/students';

// Create aysnc Action
export const  getAllStudentsRec = () => {
    return async(dispatch) => {
        try {
             dispatch(getStudentStart())
             const response = await api.get("students");
             if(response){
                dispatch(getStudentSuccess(response.data))
             }
           } catch (error) {
            console.log("Students Error ", error)
            dispatch(getStudentError(error.message))
           }
    }
}