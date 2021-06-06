import React, {useEffect, useState} from'react';
import CountUp from  'react-countup';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { fetchCountryData, fetchCountriesData, fetchDailyData, fetchCountryReport } from '../api';
import './cards.less';

export const Cards = () => {
    let getVal:any = null;
    const [getData, setData] = useState(getVal);
    const [getReportData, setReportData] = useState(getVal);

  
    useEffect(()=>{
      const fetch_Data = async() => {
        const data:any = await fetchCountryData(undefined);
        const reportData:any = await fetchCountryReport();
        setReportData(reportData);
        setData(data);
      };
      
      fetch_Data();
    }, [setData, setReportData])

    return (
        <div className={'container'}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={"infect"}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Covid cases
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
                            Number of death cases
                        </Typography>
                    </CardContent>
                </Grid>
                {/* <Grid item component={Card} xs={12} md={3} className={"active"}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Active
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={getReportData && getReportData.active} duration={2.8} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(getData && getData.lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of Active cases
                        </Typography>
                    </CardContent>
                </Grid> */}
            </Grid>
        </div>
    )
}