import { useSelector } from 'react-redux';
import PizzaCard from './PizzaCard';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

const Home = () => {

    const classes = useStyles();
    const pizzaOrder = useSelector(store => store.orderReducer);
    const pizzaList = useSelector(store => store.pizzaList);
    console.log(pizzaList);

    const history = useHistory();

    const next = () => {
        console.log('clicked next pizza order is:', pizzaOrder);
        history.push('/customer');
    }

    return (
        <Container>
            <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                style={{ marginTop: 15 }}
            >
                Step 1: Select Your Pizza
            </Typography>
            <Grid container spacing={3}>
                {pizzaList.map(pizza => {
                    return <Grid item key={pizza.id} xs={12} md={6} lg={4}>
                        <PizzaCard key={pizza.id} pizza={pizza} />
                    </Grid>
                })}
            </Grid>
            {JSON.stringify(pizzaOrder)}
            <Button
                className={classes.fab}
                onClick={next}
                variant="contained"
                color="primary"
                style={{ height: 40 }}
            >
                Next
            </Button>
        </Container>
    );
}

export default Home;