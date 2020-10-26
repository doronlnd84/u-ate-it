import React from "react";
import { Grid,makeStyles, Theme,createStyles, MenuItem, FormGroup, FormControlLabel, Checkbox, Card, withStyles } from "@material-ui/core";
import StyledButton from "../Utils/StyledButton";
import { userState } from "../User/user";


interface Props {
  updateUser: ( user: userState)  => void,
  currentUser:userState;

}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
        minWidth: 200,
      }},
    cardItem:{
        marginBottom: theme.spacing(3),
        
    }
  }),
);
const FavoriteFood = (props:Props): JSX.Element => {

  const [user, setUser] = React.useState<userState>(props.currentUser); 
 const classes = useStyles();   
       return (
       <Grid  className={classes.root} >
           <h3>           בחר את מאכליך האהובים:</h3>
           <Grid item xs={6}> 
        <FormGroup   >
            <Card  className={classes.cardItem}  >
          <FormControlLabel 
            control={
              <Checkbox 
            //   checked={dense} 
            //   onChange={(event) => setDense(event.target.checked)} 
              />
            }
            label="פסטרמה"
          />
          </Card  >
          <Card className={classes.cardItem} >
          <FormControlLabel
            control={
              <Checkbox
                // checked={secondary}
                // onChange={(event) => setSecondary(event.target.checked)}
              />
            }
            label="ברוקולי"
          />
          </Card>
          <Card  className={classes.cardItem} >
          <FormControlLabel
            control={
              <Checkbox
                // checked={secondary}
                // onChange={(event) => setSecondary(event.target.checked)}
              />
            }
            label="רגל כרושה"
          />
       </Card>
       <Card  className={classes.cardItem}>
             <FormControlLabel
            control={
              <Checkbox
              />
            }
            label="לחם שיעורין"
          />
          </Card>
          <Card  className={classes.cardItem}>
             <FormControlLabel
            control={
              <Checkbox
              />
            }
            label="אחר"
          />
          </Card>
        </FormGroup>
        </Grid>
        <StyledButton dir="ltr"
          onClick={() =>
            {
              // props.updateUser(user:userState);
              alert('הנתונים נשמרו');
            }}
        >סיום</StyledButton>
        </Grid>)              
}
export default FavoriteFood;
