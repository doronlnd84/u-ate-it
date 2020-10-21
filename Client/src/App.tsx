import React from 'react';
import GoogleBtn from './GoogleLogin/googleLogin';
import Header from './Header/header';
import {makeStyles} from '@material-ui/core/styles';
import Wellcome from './WellcomeMessage/wellcomeMessage';


const useStyles = makeStyles({
  
    content:{
      height: '100vh', 
      backgroundColor: '#F3F6FB',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      alignItems: 'center'
    },
    invisble:{
      display: 'none'
    }
    });
function App() {
  const classes = useStyles();

  return (
    <div>
    <Header/>
  <div  className={classes.content}>  
    <Wellcome/> 
     <GoogleBtn /> 
  </div>

    </div>
  );
}

export default App;
