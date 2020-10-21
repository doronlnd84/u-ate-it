import React from 'react'
import { useSelector } from 'react-redux';
import {userState} from '../Store/User/userActionTypes';
import StoreStateType from '../Store/storeStateType';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  
    invisble:{
      display: 'none'
    }
    });

const Wellcome: React.FC = (): JSX.Element => {
    const classes = useStyles();
    const islogged:boolean =useSelector<StoreStateType,userState>(s=>s.user).isLogined;
   return  <div className={islogged ? classes.invisble : ''} >
   ברוכים הבאים ל
   <b>אכלת אותה!</b>
  <span> בואו נתחבר ומיד נתחיל </span>   
 </div>

}
  
export default Wellcome;
