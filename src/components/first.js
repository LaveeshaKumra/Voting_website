import React, { Component } from 'react'

import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
   
}));

const ValidationTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
        },
    },
})(TextField);


export default function First() {
    let history = useHistory();
    function code(e){
        localStorage.setItem("code", e.target.value);
    }
    function next(){
        history.push('/vote')
    }
    const classes = useStyles();

    return (
        <div>
            <div className="container" >
                <div style={{margin:"5%"}}>
                    <img src="https://lh6.googleusercontent.com/proxy/tBez1BBW-AL4nQg4-FRjWsymPmE-Uryf52zNfbW6ndi4QkdudLeJUiEFhKZAPm5O0_dTSS6Uhksc9ak" />

                </div>
                <div>
                        <ValidationTextField
                            className={classes.margin}
                            label="Enter code"
                            required
                            variant="outlined"
                            id="validation-outlined-input"
                            onChange={code}
                        /><br/><br/>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={next}
                            >
                            Done
                        </Button>

                </div>
            </div>
        </div>
    )
}


// export default First

