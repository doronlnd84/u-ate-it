import React from 'react';
import { useSelector } from 'react-redux';
import GoogleBtn from './GoogleLogin/googleLogin';
import Header from './Header/header';
import {makeStyles} from '@material-ui/core/styles';
import Wellcome from './WellcomeMessage/wellcomeMessage';
import TabManagement from './TabManagement/tabManagment';
import StoreStateType from './Store/storeStateType';
import { userState } from './User/user';
import { Box } from '@material-ui/core';


const useStyles = makeStyles({
  main:{
    height: '100vh'
  //   , 
  //  // backgroundColor: '#F3F6FB',
  //  display: 'flex',
  //  justifyContent: 'space-evenly',
  //  flexDirection: 'column',
  //  alignItems: 'center'
 },

    content:{
      
      height:'80%',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      alignItems: 'center'
   },
   logged:{
    display: 'flex',
    justifyContent: 'space-evenly'
    
 },
 
    invisble:{
      display: 'none'
    }
    });
function App() {
  const classes = useStyles();
  const currentUser:userState = useSelector<StoreStateType,userState>(s=>s.user);
  const isLogged:boolean =currentUser.isLogined;
  return ( <div  >
           <div dir='rtl' className={classes.main}>
             <Header/>
             <Box width="70%" display={!isLogged?"none":"block"} aria-label="content"> 
               <TabManagement currentUser={currentUser}/>  
            </Box>
            <Box   className={isLogged?classes.logged:classes.content}>
               <Wellcome/> 
               <div dir='ltr' >
               <GoogleBtn /> 
               </div>
           
           </Box>
        </div>
    </div>
    
      
       
     
 );
}

export default App;
