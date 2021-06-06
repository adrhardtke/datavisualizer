import { AxiosPromise } from 'axios'
import { DataType } from '../types/DataType'
import Api from './Api'

function getDataList(): AxiosPromise<DataType[]> {
    return Api.get('/data')
}

export { getDataList }