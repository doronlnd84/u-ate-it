import React from "react";
import { Grid,makeStyles, Theme,createStyles, MenuItem } from "@material-ui/core";
import FormInput from '../Utils/FormInput';
import SimpleTextField from "../Utils/SimpleTextField";
import StyledButton from "../Utils/StyledButton";
import Box from "@material-ui/core/Box/Box";
import { userState } from "../User/user";
import postUser from "./usePersonalDetails";

interface Props {
  currentUser: userState,
    changeTab: ( newValue: number)  => void,
    updateUser: ( user: userState)  => void,

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

  
  const [firstName, setFirstName] = React.useState<string|undefined>(undefined);   
  const [lastName, setLastName] = React.useState<string|undefined>(undefined);     
  const [birthDate, setBirthDate] = React.useState<string|undefined>(undefined);  
  const [favoriteBeer, setFavoriteBeer] = React.useState<string|undefined>(undefined);    
  const [idNumber, setIdNumber] = React.useState<string|undefined>(undefined);     
  const [telephone, setTelephon] = React.useState<string|undefined>(undefined);     
  const [user, setUser] = React.useState<userState>(props.currentUser); 
 
 const classes = useStyles();   
       return  <Box component="span" className={classes.root} >  
                    <Grid   container >
                        <Grid  >
                        <FormInput fieldName="שם פרטי" >
                            <SimpleTextField id="firstName"  
                            variant="outlined"
                            value={firstName}
                             onChange={ (e)=> {
                               setFirstName(e.target.value)}}
                             />
                        </FormInput> 
                        </Grid>
                        <Grid>
                        <FormInput fieldName="שם משפחה" >
                            <SimpleTextField id="lastName"
                            variant="outlined"
                            value={lastName}
                            onChange={ (e)=> {
                              setLastName(e.target.value)}}
                            />
                        </FormInput>
                        </Grid>
                    </Grid>
                    <Grid  container  >
                        <Grid item>
                        <FormInput fieldName="תאריך לידה" >
                            <SimpleTextField id="birthDate" type="date"  variant="outlined"
                                                       onChange={ (e)=> {
                                                        setBirthDate(e.target.value)}}
                            value={birthDate}
                            />
                        </FormInput>
                        </Grid>
                        <Grid >
                        <FormInput   fieldName="">
                            <SimpleTextField id="favorateBeer" label="מהי הבירה האהובה עליך" select variant="outlined"
                            value={favoriteBeer}
                            onChange={ (e)=> {
                              setFavoriteBeer(e.target.value)}}

                            >
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
                            <SimpleTextField id="IDNumber"   variant="outlined"
                            value={idNumber}
                            onChange={ (e)=> {
                              setIdNumber(e.target.value)
                              }}

                            />
                        </FormInput> 
                        </Grid>
                    </Grid>
                    <Grid   container  >
                        <Grid item>
                        <FormInput fieldName="טלפון" >
                            <SimpleTextField id="telephone" variant="outlined"
                            value={telephone} 
                            onChange={ (e)=> {
                              setTelephon(e.target.value)
                              }}
                            />
                        </FormInput> 
                        </Grid>
                    </Grid>
                    <StyledButton
                    onClick={() =>
                        {

                        setUser({
                          isLogined:user? user.isLogined : false,
                          accessToken: user? user.accessToken : '' ,
                          fullName: firstName + ' '+ lastName,
                          email:  user? user.email : '' ,
                          beer: favoriteBeer,
                          birthDate: birthDate,
                          idNumber: idNumber,
                          favoriteFood:user? user.favoriteFood : undefined
                        });
                        postUser(user);
                        props.changeTab(2);
                      }
                        }
                        

                    dir="ltr" >המשך</StyledButton>
              </Box>
              
}
export default PersonalDetail;
