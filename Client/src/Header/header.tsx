import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Ballot from '@material-ui/icons/Ballot'
import {makeStyles, Theme} from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import StoreStateType from '../Store/storeStateType';
import { userState } from '../Store/User/userActionTypes';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { FormatColorFill } from '@material-ui/icons';

const useMyStyles = makeStyles({
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
    });

    const useStyles = makeStyles((theme: Theme) => ({
        root: {
          flexGrow: 1,
          width: '100%',
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.grey[800]
        },
          iconLabelWrapper: {
            width: "auto",
            paddingLeft: 6,
            flexDirection: "row"
          },

          icon: {
            paddingLeft:10,
            paddingRight:10,

        },
        indicator: {
            backgroundColor: "Aqua"
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
      const classes = useStyles();
      const user:userState = useSelector<StoreStateType,userState>(s=>s.user);
    const userName:string = user.fullName??'NO NAME'; 
    const islogged = user.isLogined;
       return   <AppBar  dir="rtl" className={classes.root} >
          <ToolBar>
              <div  >
              <Ballot className={classes.icon} />
              </div>
              <Typography variant="h6" > אכלת אותה!</Typography>
            <div className={localClasses.userDetails}>
              <Typography variant="h6"  className={!islogged ? localClasses.invisble : ''} > שלום לך {userName}</Typography>
              </div>
          </ToolBar>
          <div className={!islogged ? localClasses.invisble : ''}>
        <Tabs value={selectedTab}  onChange={handleChange} classes={{ indicator: classes.indicator}} >
          <Tab value={1} classes={{wrapper: classes.iconLabelWrapper,selected:classes.indicator}}  label="פרטים אישיים" icon={<PersonPinIcon className={classes.icon} />}{...tabProps('two')}  />
          <Tab value={2} classes={{wrapper: classes.iconLabelWrapper,selected:classes.indicator}}  label="מאכלים אהובים" icon={<FastfoodIcon className={classes.icon} />}{...tabProps('two')}  />
         
        </Tabs>
        </div>
          </AppBar>
      

}
export default Header;
