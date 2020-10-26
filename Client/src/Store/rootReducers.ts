import {combineReducers} from 'redux';
import StoreStateType from './storeStateType';
import userReducer from './User/userReducer';

export default combineReducers<StoreStateType>({
     user:  userReducer
})
