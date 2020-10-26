import {userState} from '../../User/user';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';



interface SetLogin {
    type: typeof LOGIN;
    payload: userState;

}
interface setLogout {
    type: typeof LOGOUT;
    payload: userState;
}



export type userAction = SetLogin | setLogout;
