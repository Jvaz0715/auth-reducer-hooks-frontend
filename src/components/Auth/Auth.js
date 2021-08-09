import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { Grid, Button, TextField, CircularProgress, Snackbar } from "@material-ui/core";
import { MuiAlert } from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));

function Auth() {
    const classes =useStyles();
    return (
        <div> </div>
    )
}

export default Auth
