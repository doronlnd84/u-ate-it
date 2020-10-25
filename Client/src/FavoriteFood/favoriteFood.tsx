import React from "react";
import { Grid,makeStyles, Theme,createStyles, MenuItem, FormGroup, FormControlLabel, Checkbox, Card, withStyles } from "@material-ui/core";
import StyledButton from "../Utils/StyledButton";
import { SwapCalls } from "@material-ui/icons";


// const StyledButton = withStyles({
//     root: {
        
//       background: "Aqua",
//       borderRadius: 30,
//       float: "left"
//     }
//   })(Button);



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
        width: 200,
      }},
    cardItem:{
        marginBottom: theme.spacing(3),
        
    }
  }),
);
const FavoriteFood: React.FC = (): JSX.Element => {

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
              alert('הנתונים נשמרו');
            }}
        >סיום</StyledButton>
        </Grid>)              
}
export default FavoriteFood;
