
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'

import { thunk } from 'redux-thunk'

import { resiReducer } from './AuthRegister/reducer'
import { authReducer } from './AuthReducer/reducer'
import { tasksReducer } from './TaskReducer/reducer'
import { profileReducer } from './ProfileRedux/reducer'


const rootReducer = combineReducers({ resiReducer, authReducer, tasksReducer, profileReducer })
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))