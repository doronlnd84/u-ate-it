import React from 'react';
import {createStyles, FilledTextFieldProps, makeStyles, OutlinedTextFieldProps, StandardTextFieldProps, TextField, TextFieldProps, } from '@material-ui/core';

export interface SimpleTextFieldProps extends  OutlinedTextFieldProps  {
    children?: JSX.Element[] |JSX.Element;
    id: string,
    type?:string,
    select?:boolean,
    label?:string,
    value?:any
  //   onChange?: (event: React.ChangeEvent<{}>) => void,
}



const useStyles = makeStyles(() =>
  createStyles({
    wdth: {
        minWidth: 100
      }
    } ));

const SimpleTextField= (props:SimpleTextFieldProps ) => { 
  // const { children,id,type,select,label, ...rest } = props;
  const classes = useStyles();
    return (
        <TextField 
        size="small"
        onChange={props.onChange}
        {...props}
        >
            {props.children}
        </TextField>
    );
};

export default SimpleTextField;