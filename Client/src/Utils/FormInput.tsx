import React from 'react';
import { Typography, TypographyProps, Grid } from '@material-ui/core';

import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    fieldName: {
        fontWeight: 'bold',
        marginRight: '10',
    },
    gridField: {
        minWidth: 80
    },
    formField: {

        display: 'flex',
        alignItems: 'center',
        
        
    },
    formRow: {
        display: 'flex',
        margin: '1vh 0',
        flexWrap: 'wrap',
        alignItems: 'center',
    }
 
});




// import useFormStyles from 'styles/formStyles';

const FormInput: React.FC<Props> = (props: Props): JSX.Element => {
     const formClasses = useStyles();

    const { fieldName, children, ...rest } = props;

    return (
        <Grid container  component="span"
          className={formClasses.formField}
        >
            <Grid className={formClasses.gridField} >
                <Typography 
                 className={formClasses.fieldName} 
                variant='caption'
                 {...rest}>
                    {fieldName }
                </Typography>
            </Grid>
            <Grid  >
                {children}
            </Grid>
        </Grid>
    );
};

export default FormInput;

interface Props extends TypographyProps {
    fieldName?: string;
    children: JSX.Element | JSX.Element[];
};
