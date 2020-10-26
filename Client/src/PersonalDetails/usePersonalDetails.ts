import { userState } from "../User/user";
import axios from 'axios';



const postUser= (user:userState ) => {
    
    axios.post("api/users/",user).then((result) =>{
            if (result?.data) {
                console.log(result?.data)
            } else {
                console.log("user returnwed empty")
            }
        }
        ).catch((error) => {
            console.log("error",error);
        });
}
export default postUser;