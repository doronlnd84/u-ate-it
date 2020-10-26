import React from 'react'
import { useSelector } from 'react-redux';
import { GoogleLogin, GoogleLogout,GoogleLoginResponse, GoogleLoginProps, GoogleLoginResponseOffline } from 'react-google-login';
import {setLogin,setLogout} from '../Store/User/userActionCreators';
import {userState} from '../User/user';
import StoreStateType from '../Store/storeStateType';

const CLIENT_ID = '112780208456-r6eoii5l30p9gdkivbjtnfaobpivg5nm.apps.googleusercontent.com';

const login =  (response:  GoogleLoginResponse| GoogleLoginResponseOffline )=> {
  if(!!response &&  typeof response === 'object' && !!(response as GoogleLoginResponse).tokenObj)
    {
      console.log(response);
      setLogin({
          isLogined: true,
          accessToken:  (response as GoogleLoginResponse).tokenObj.access_token,
          fullName: (response as GoogleLoginResponse).getBasicProfile().getName(),
          email: (response as GoogleLoginResponse).getBasicProfile().getEmail()
        });

};}
let logout = () => {setLogout();}
const GoogleBtn: React.FC = (): JSX.Element => {
let handleLoginFailure =  (response:GoogleLoginResponse | Readonly<GoogleLoginProps>) => { alert('Failed to log in')};
let handleLogoutFailure = ()=> { alert('Failed to log out') };
   return <div>
    { useSelector<StoreStateType,userState>(s=>s.user).isLogined ?
      <GoogleLogout
        clientId={ CLIENT_ID }
        buttonText='Logout'
        onLogoutSuccess={()=>  {logout(); }}
        onFailure={ handleLogoutFailure }
      >
      </GoogleLogout>: <GoogleLogin
        clientId={ CLIENT_ID }
        buttonText='Sign in with Google'
        onSuccess={e=>  {login(e);}}
        onFailure={ handleLoginFailure }
        cookiePolicy={ 'single_host_origin' }
        responseType='code,token'
      />
    }
  </div>
    }
  
export default GoogleBtn;
