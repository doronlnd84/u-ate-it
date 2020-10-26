import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Ballot from '@material-ui/icons/Ballot'
import {makeStyles, Theme} from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import StoreStateType from '../Store/storeStateType';
import {userState} from '../User/user'

const useMyStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.grey[800]
  },
    logoTitle: {
        padding: '12px'
    },
    userDetails: {
        position:'absolute',
        left:0,
        padding: '12px'
    },
    invisble:{
        display: 'none'
      }
       
    }));


    const tabProps = (index: any):object => {
        return {
          id: `wrapped-tab-${index}`,
          'aria-controls': `wrapped-tabpanel-${index}`,
        };
      }
const Header: React.FC = (): JSX.Element => {
    
    const [selectedTab, setSelectedTab] = React.useState<number>(1);
const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  setSelectedTab(newValue);
};
      const localClasses = useMyStyles();
      const user:userState = useSelector<StoreStateType,userState>(s=>s.user);
    const userName:string = user.fullName??'NO NAME'; 
    const islogged = user.isLogined;
       return     <div>
       <AppBar  dir="rtl" className={localClasses.root} position='static'>
          <ToolBar>
              <div  >
              <Ballot />
              </div>
              <Typography variant="h6" > אכלת אותה!</Typography>
            <div className={localClasses.userDetails}>
              <Typography variant="h6"  className={!islogged ? localClasses.invisble : ''} > שלום לך {userName}</Typography>
              </div>
          </ToolBar>
          </AppBar>
          </div>      

}
export default Header;
