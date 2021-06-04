import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const Graphics = () => {

    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setAge(event.target.value as string);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Data</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Data"
        >
          <MenuItem value="">
            <em>Nenhum</em>
          </MenuItem>
          <MenuItem value={10}>Example data 1</MenuItem>
          <MenuItem value={20}>Example data 2</MenuItem>
          <MenuItem value={30}>Example data 3</MenuItem>
        </Select>
      </FormControl>
    )
}

export default Graphics