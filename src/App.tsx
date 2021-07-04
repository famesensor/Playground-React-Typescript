import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import CustomHook from './pages/customHook';
import UseStatePage from './pages/useStatePage';
import UseEffectPage from './pages/useEffectPage';
import UseReducerPage from './pages/useReducerPage';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary
        }
    })
);

function App() {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <UseEffectPage />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <UseStatePage initialCount={1} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <UseReducerPage count={10} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <CustomHook />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default App;
