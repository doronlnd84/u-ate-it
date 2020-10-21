export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface userState  {
    isLogined:boolean,
    accessToken: string,
    fullName?: string,
    email?: string,
  };   


interface SetLogin {
    type: typeof LOGIN;
    payload: userState;

}
interface setLogout {
    type: typeof LOGOUT;
    payload: userState;
}



export type userAction = SetLogin | setLogout;
