import React , {useState, useEffect} from 'react';
import { fetchCountriesData, fetchCountryData, fetchDailyData, fetchCountryReport} from '../../api';
import {
    Table, 
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Toolbar,
    Typography,
    Paper,
    Checkbox,
    IconButton,
    Tooltip,
    FormControl,
    FormControlLabel,
    Switch,
    Grid
} from '@material-ui/core';


export const TableData = () => {
    const data:any = null;
    const [getData, setData] = useState(data);

    useEffect(() => {
        const result = async() => {
            setData(await fetchCountryReport())
        }

        result()
    }, [setData]);

    console.log(getData, "getData")
    
    return(
        <Grid container spacing={3} justify="center">
            <TableContainer className="table-container">
                <Table>
                    <TableHead>
                    <TableRow>
                        {['Country', 'Total Cases', 'Today Cases', 'Today Deaths',  'Total Deaths', 'Total Recovered', 'Active Cases', 'Population'].map((val) => (
                                <TableCell>{val}</TableCell>
                            ))
                        }
                    </TableRow>
                    </TableHead>
                    {getData && getData.map((key:any, val:any) => (
                        <TableRow hover>
                            <TableCell align="left">{key.country}</TableCell>
                            <TableCell align="left">{key.cases}</TableCell>
                            <TableCell align="left">{key.todayCases}</TableCell>
                            <TableCell align="left">{key.todayDeaths}</TableCell>
                            <TableCell align="left">{key.deaths}</TableCell>
                            <TableCell align="left">{key.recovered}</TableCell>
                            <TableCell align="left">{key.active}</TableCell>
                            <TableCell align="left">{key.population}</TableCell>
                        </TableRow>
                    ))}
                </Table>
            </TableContainer>
        </Grid>
    )
}