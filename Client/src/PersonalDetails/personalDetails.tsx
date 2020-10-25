import React from "react";
import { Grid,makeStyles, Theme,createStyles, MenuItem, Button } from "@material-ui/core";
import FormInput from '../Utils/FormInput';
import SimpleTextField from "../Utils/SimpleTextField";
import StyledButton from "../Utils/StyledButton";
import Box from "@material-ui/core/Box/Box";

interface Props {
    changeTab: ( newValue: number)  => void,

}
const beers = [
    {
      value: 'מכבי',
      label: 'מכבי',
    },
    {
      value: 'גולדסטאר',
      label: 'גולדסטאר',
    },
    {
      value: 'נשר',
      label: 'נשר',
    }
  ];
  



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        
      '& .MuiTextField-root': {
         margin: theme.spacing(1),
          width: "25ch"


      },
      '& .MuiTypography-root': {
        margin: theme.spacing(1),
      },
      
    },
  }),
);
// onClick={(e) => changeTab(1)}
const PersonalDetail = (props:Props): JSX.Element => {
 
 const classes = useStyles();   
       return  <Box component="span" className={classes.root} >  
                    <Grid   container >
                        <Grid  >
                        <FormInput fieldName="שם פרטי" >
                            <SimpleTextField id="firstName" />
                        </FormInput> 
                        </Grid>
                        <Grid>
                        <FormInput fieldName="שם משפחה" >
                            <SimpleTextField id="lastName" />
                        </FormInput>
                        </Grid>
                    </Grid>
                    <Grid  container  >
                        <Grid item>
                        <FormInput fieldName="תאריך לידה" >
                            <SimpleTextField id="birthDate" type="date" />
                        </FormInput>
                        </Grid>
                        <Grid >
                        <FormInput   fieldName="">
                            <SimpleTextField id="favorateBeer" label="מהי הבירה האהובה עליך" select  >
                                {beers.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                                ))}
                            </SimpleTextField>
                        </FormInput>
                        </Grid>
                    </Grid>
                    <Grid   container  >
                        <Grid item>
                        <FormInput fieldName="ת.ז" >
                            <SimpleTextField id="IDNumber" />
                        </FormInput> 
                        </Grid>
                    </Grid>
                    <Grid   container  >
                        <Grid item>
                        <FormInput fieldName="טלפון" >
                            <SimpleTextField id="telephone" />
                        </FormInput> 
                        </Grid>
                    </Grid>
                    <StyledButton
                    onClick={() =>
                        {
                             props.changeTab(2);
                        }
                        }

                    dir="ltr" >המשך</StyledButton>
              </Box>
              
}
export default PersonalDetail;
