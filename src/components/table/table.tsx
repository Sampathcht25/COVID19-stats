import React , {useState, useEffect} from 'react';
import {fetchCountryReport} from '../../api';
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
    const rowData = ['S.No', 'Country', 'Total Cases', 'Today Cases', 'Today Deaths',  'Total Deaths', 'Total Recovered', 'Active Cases', 'Population'];

    useEffect(() => {
        const result = async() => {
            setData(await fetchCountryReport())
        }

        result()
    }, [setData]);
    
    return(
        <Grid container spacing={3} justify="center">
            <TableContainer className="table-container">
                <Table>
                    <TableHead>
                    <TableRow>
                        {rowData.map((val) => <TableCell>{val}</TableCell>)}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {getData && getData.sort((a:any, b:any) => b.cases-a.cases).map((key:any, val:any) => (
                            <TableRow hover>
                                <TableCell align="left">{val+1}</TableCell>
                                <TableCell align="left">{key.country}</TableCell>
                                <TableCell align="left">{Intl.NumberFormat().format(key.cases)}</TableCell>
                                <TableCell align="left">{Intl.NumberFormat().format(key.todayCases)}</TableCell>
                                <TableCell align="left">{Intl.NumberFormat().format(key.todayDeaths)}</TableCell>
                                <TableCell align="left">{Intl.NumberFormat().format(key.deaths)}</TableCell>
                                <TableCell align="left">{Intl.NumberFormat().format(key.recovered)}</TableCell>
                                <TableCell align="left">{Intl.NumberFormat().format(key.active)}</TableCell>
                                <TableCell align="left">{Intl.NumberFormat().format(key.population)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}