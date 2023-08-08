import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from "redux-thunk"
import { studentReducer } from '../reducers'
export const store = createStore(studentReducer, applyMiddleware(thunkMiddleware))
