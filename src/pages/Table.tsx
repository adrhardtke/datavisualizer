import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { getDataList } from '../service/Data';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(opcao: string, resultado: number) {
  return { opcao, resultado };
}

const rows = [
  createData('Masculino', 35.7),
  createData('Feminino', 60.7),
  createData('Prefiro não dizer', 3.6),
];

type OptionsType = {
  opcao: string,
  resultado: number
}

type tableProps = {
  title: string,
  options: OptionsType[]
}

const DenseTable = () => {
  const classes = useStyles();
  const [dataTables, setDataTables] = useState<tableProps[]>()

  useEffect(() => {
    getDataList().then(({ data }) => {
      let _tables: tableProps[] = [];
      data.map(dt => {
        _tables.push({
          title: dt.title,
          options: dt.responses.map(res => (
            {
              opcao: res.option,
              resultado: res.value
            }
          ))
        })
      })
      setDataTables(_tables)
    })


  }, [])

  useEffect(() => {
    if (dataTables) {

    }
  }, [dataTables])

  const notPercentValueList = ['Curso']

  return (
    <>
      {
        dataTables?.map(({ title, options }) => (
          <TableContainer component={Paper} style={{marginTop: '2rem'}}>
            <Typography style={{ margin: '1rem' }}>{title}</Typography>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Opção</TableCell>
                  <TableCell align="right">Resultado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {options.map((row) => (
                  <TableRow key={row.opcao}>
                    <TableCell component={"th"} scope="row">
                      {row.opcao}
                    </TableCell>
                    <TableCell align="right">{row.resultado} {!notPercentValueList.includes(title) ? '%' : '' } </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ))
      }
    </>
  );
}

export default DenseTable
