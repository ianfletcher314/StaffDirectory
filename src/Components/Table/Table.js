import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import search

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable({info,setInfo}) {
  const classes = useStyles();
const [searchName,setSearchName] = useState("")
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell align="right">Empoyee Email</TableCell>
            <TableCell align="right">Age&nbsp;</TableCell>
            <TableCell align="right">Phone&nbsp;</TableCell>
            <TableCell align="right">Location&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* map over states for the staff */}
          {info.filter(row => row.name.first.includes(searchName)).map((row) => (
            <TableRow key={row.name.first}>
              <TableCell component="th" scope="row">
              <img alt="alt" src= {row.picture.large}></img>
                {row.name.first} {row.name.last}
                
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.dob.age}</TableCell>
         
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.location.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}