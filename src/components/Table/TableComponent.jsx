import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
 import styles from './Table.module.css'
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#2979ff',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#bbdefb',
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    container: {
        maxHeight: 600,
        maxWidth: 900,
    },
});

const TableComponent = ({ countries }) => {
    const classes = useStyles();
    return (
        <TableContainer className={classes.container} component={Paper}>
            <Table className={classes.table} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Country</StyledTableCell>
                        <StyledTableCell align="right">Cases</StyledTableCell>
                        <StyledTableCell align="right">Recovered</StyledTableCell>
                        <StyledTableCell align="right">Deaths</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {countries.map(({ country, cases, recovered, deaths }) => (
                        <StyledTableRow key={country}>
                            <StyledTableCell component="th" scope="row">
                                {country}
                            </StyledTableCell>
                            <StyledTableCell align="right">{cases}</StyledTableCell>
                            <StyledTableCell align="right">{recovered}</StyledTableCell>
                            <StyledTableCell align="right">{deaths}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent
