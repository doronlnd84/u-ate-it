import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {makeStyles, Theme} from '@material-ui/core/styles';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { Box, Typography } from '@material-ui/core';
import PersonalDetail from '../PersonalDetails/personalDetails';
import FavoriteFood from '../FavoriteFood/favoriteFood';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel =(props: TabPanelProps)=> {
  const { children, value, index, ...other } = props;

  return (
    <Box component="span" 
      
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
            {...other}
    >
      {value === index && (
        <Box>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </Box>
  );
}




    const useStyles = makeStyles((theme: Theme) => ({
        root: {
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
        // ,
        // tab: {
        //     width: "60%"
        // }        
        
      }));
 
  
  
const TabManagement: React.FC = (): JSX.Element => {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState<number>(1);        
    const changeTab = (tabIndex:number)=>{   setSelectedTab(tabIndex);}   
const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        changeTab(newValue)
      };

return  <Box component="span"  aria-label="tbManage">
                <Tabs value={selectedTab}  onChange={handleChange} classes={{ indicator: classes.indicator}} >
                    <Tab value={1} classes={{wrapper: classes.iconLabelWrapper,selected:classes.indicator}}  label="פרטים אישיים" icon={<PersonPinIcon className={classes.icon} />} />
                    <Tab value={2} classes={{wrapper: classes.iconLabelWrapper,selected:classes.indicator}}  label="מאכלים אהובים" icon={<FastfoodIcon className={classes.icon} />}  />
                </Tabs>
                <TabPanel value={selectedTab} index={1}  >
                  <PersonalDetail changeTab={changeTab} />
              </TabPanel>
              <TabPanel value={selectedTab} index={2}>
                <FavoriteFood/>
                  </TabPanel>
              </Box>
}
export default TabManagement;
