import {store} from '../store';
import * as actionTypes from './userActionTypes';
import {userState} from '../../User/user';

export const setLogin = (user: userState): void => {
    store.dispatch({
        type: actionTypes.LOGIN,
        payload: user
    })
}

export const setLogout = (): void => {
    store.dispatch({
        type: actionTypes.LOGOUT,
        payload: null
    })
}

// export const getUserName = (): string => {
//    return  store.getState().user.fullName??'NO NAME FOUND';
// }


export const subscribeMission =(): void => {
    store.subscribe(()=>{
        console.log("Store changed",store.getState());
        
        });
} 
