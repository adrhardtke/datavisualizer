import React, { useEffect, useState } from 'react'
import { GraphicWrapper } from './styles'
import Graphic from '../components/Graphic1'
import { FormControl, InputLabel, Select, MenuItem, makeStyles, createStyles, Theme } from "@material-ui/core";
import { getDataList } from '../service/Data';
import { DataType } from '../types/DataType';

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
    const [selectDataValue, setSelectDataValue] = useState('')
    const [selectData, setSelectData] = useState<DataType | null>()
    const [dataOptions, setDataOptions] = useState<DataType[]>([])
  
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setSelectDataValue(event.target.value as string);
      
      const _selectData = dataOptions.find(dt => dt.title === event.target.value)

      if(_selectData) setSelectData(_selectData)

    };

    useEffect(() => {
      getDataList().then(({data}) => {
        setDataOptions(data)
      })
    }, [])

    return (
        <div aria-label="graphic-page">
          <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Opções</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectDataValue}
                onChange={handleChange}
                label="Opções"
              >
                <MenuItem value="">
                  <em>Nenhum</em>
                </MenuItem>
                {
                  dataOptions.map(({title, id}) => (
                    <MenuItem key={id} value={title}>{title}</MenuItem>
                  ))
                }               
              </Select>
          </FormControl>
          <GraphicWrapper>
            {selectData && 
              <Graphic
                label={selectData.title}
                labels={selectData.responses.map(res => res.option)}
                data={selectData.responses.map(res => res.value)}
              />}           
          </GraphicWrapper>
        </div>
    )
}

export default Graphics