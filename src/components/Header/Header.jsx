import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {useState, useEffect} from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));


function Header() {
    const classes = useStyles();
    //***This reducer name was changed and is now two so
    //we need to figure out how to get the total value here
    //However, we do not necessarily need conditional rendering here
    //const total = useSelector(store => store.orderReducer);

    return (
        <div className={classes.root}>
            <AppBar className='App-header' style={{ margin: 0 }}>
                <Toolbar>
                    <Typography 
                        className='classes.title' 
                        color="inherit"
                    >
                        Prime Pizza
                    </Typography>
                    {/* Add logic to conditionall display total price */}
                    {/* <h3>Total: {total.total}</h3> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;