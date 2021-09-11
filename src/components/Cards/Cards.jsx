import React from 'react'
import { Card, CardContent,Typography,Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data:{cases, recovered,deaths,updated}}) => {
   // console.log(props);
   if(!cases){
       return 'Loading...';
   }
    return (
        <div className = {styles.container}>
            <Grid container spcing = {3} justify = "center"> 
                <Grid item component = {Card} xs ={12} md={3} className = {cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant = "h5">
                            <CountUp start = {cases} end = {cases} separator = ","/>
                        </Typography>
                        <Typography color = "textSecondary">{new Date(updated).toDateString()}</Typography>
                        <Typography variant = "body2">Number of active cases of covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs ={12} md={3} className = {cx(styles.card,styles.recover)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recoverd</Typography>
                            <Typography variant = "h5">
                                 <CountUp start = {recovered} end = {recovered} separator = ","/>
                             </Typography>
                        <Typography color = "textSecondary">{new Date(updated).toDateString()}</Typography>
                        <Typography variant = "body2">Number of Recover cases of covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs ={12} md={3} className = {cx(styles.card,styles.death)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant = "h5">
                                <CountUp start = {deaths} end = {deaths} separator = ","/>
                            </Typography>
                        <Typography color = "textSecondary">{new Date(updated).toDateString()}</Typography>
                        <Typography variant = "body2">Number of Deaths due to covid 19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards
