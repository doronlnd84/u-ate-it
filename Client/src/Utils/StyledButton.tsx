import { Button, ButtonProps, withStyles } from "@material-ui/core";
import React from "react";


interface Props extends ButtonProps {

  // changeTab?: (event: React.ChangeEvent<{}>, newValue: number)  => void
  // children?: JSX.Element | JSX.Element[]| string;
  children: any;
};

const StyleButton = withStyles({
    root: {
        
      background: "Aqua",
      borderRadius: 30,
      float: "left"
    }
  })(Button);

  const StyledButton= (props:Props) => { 
    const { children, ...rest } = props;
      return (
          <StyleButton {...rest} >
            
              {props.children}
          </StyleButton>
  
  
      );
  };
  
  export default StyledButton;