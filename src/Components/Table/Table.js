import React, {  useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Search from "../Search/Search";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




export default function DenseTable({ info, setInfo }) {
  const [sorted, setSort] = useState(false)

  const sortByAge = () => {
    if (sorted) {
      const newInfo = [...info]
      newInfo.sort((a, b) => b.dob.age - a.dob.age)
      setInfo(newInfo)
      setSort(false)
    }
    else {
      const newInfo = [...info]
      newInfo.sort((a, b) => a.dob.age - b.dob.age)
      setInfo(newInfo)
      setSort(true)

    }

  }

  const classes = useStyles();

  const [searchName, setSearchName] = useState("")

  function handleInputChange(event) {
    const value = event.target.value;
    console.log(value)
    setSearchName(value
    );
  }


  return (
    <TableContainer component={Paper} className="container">
      <div className="container">
      <Search handleInputChange={handleInputChange} />
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell align="right">Empoyee Email</TableCell>
            <TableCell className="blue-text" align="right" onClick={() => { sortByAge() }}>Age (click to sort)&nbsp;</TableCell>
            <TableCell align="right">Phone&nbsp;</TableCell>
            <TableCell align="right">Location&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* map over states for the staff */}
          {info.filter(row => row.name.first.toLowerCase().includes(searchName)).map((row) => (
            <TableRow key={row.name.first}>
              <TableCell component="th" scope="row">
                <img alt="alt" src={row.picture.large}></img>
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
      </div>
    </TableContainer>
  );
}