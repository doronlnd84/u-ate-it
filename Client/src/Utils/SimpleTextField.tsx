import React from 'react';
import {createStyles, makeStyles, TextField} from '@material-ui/core';

export interface SimpleTextFieldProps{
    children?: JSX.Element[] |JSX.Element;
    id: string,
    type?:string,
    select?:boolean,
    label?:string

}



const useStyles = makeStyles(() =>
  createStyles({
    wdth: {
        minWidth: 100
      }
    } ));
const SimpleTextField= (props:SimpleTextFieldProps) => { 

  const classes = useStyles();
    return (
        <TextField 
        variant="outlined"
        size="small"
         className={classes.wdth}
         
        {...props}
        >
            {props.children}
        </TextField>
    );
};

export default SimpleTextField;