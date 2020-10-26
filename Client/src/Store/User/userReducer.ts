import * as Actions from './userActionTypes';
import {userState} from './userActionTypes';


const initialState: userState  = {
    isLogined:false,
    accessToken: '',
    fullName: '',
    email: '',
};

const userReducer = (state =initialState , action: Actions.userAction) : userState  => {
    switch (action.type) {
        case Actions.LOGIN: {
           return action.payload;
        }
 
        case Actions.LOGOUT: {
            return {
                isLogined: false,
                accessToken: '',
                fullName: '',
                email: ''
              };
         }
        
        default:  return state;
    }
}

export default userReducer;
