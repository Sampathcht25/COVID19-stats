import React, {useEffect, useState} from'react';
import CountUp from  'react-countup';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { fetchCountryData, fetchCountriesData, fetchDailyData } from '../api';
import './cards.less';

export const Cards = () => {
    let getVal:any = null;
    const[getData, setData] = useState(getVal);
  
    useEffect(()=>{
      const fetch_Data = async() => {
        const data:any = await fetchCountryData(undefined)
        setData(data);
      };
      
      fetch_Data();
    }, [setData])

    console.log(getData && getData, "getData")


    return (
        <div className={'container'}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={"infect"}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={getData && getData.confirmed?.value} duration={2.8} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(getData && getData.lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of active cases
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={"recover-case"}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={getData && getData.recovered?.value} duration={2.8} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(getData && getData.lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of recovery cases
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={"deaths"}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={getData && getData.deaths?.value} duration={2.8} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(getData && getData.lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of deaths
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}