export const FETCH_STUDENT_START   = "FETCH_STUDENT_START"
export const FETCH_STUDENT_SUCCESS = "FETCH_STUDENT_SUCCESS"
export const FETCH_STUDENT_ERROR   = "FETCH_STUDENT_ERROR"

export const getStudentStart = () => {
    return{
        type:FETCH_STUDENT_START
    }
}

export const getStudentSuccess = (students) => {
    return{
        type:FETCH_STUDENT_SUCCESS,
        payload:students
    }
}

export const getStudentError = (error) => {
    return{
        type:FETCH_STUDENT_ERROR,
        payload:error
    }
}
//async action always returns function that calls normal actions