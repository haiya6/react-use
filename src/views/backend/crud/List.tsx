import React from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
]

const data: DataType[] = [
  {
    name: '张三',
    age: 10,
    address: '中国湖北武汉'
  },
  {
    name: '李四',
    age: 20,
    address: '中国北京'
  }
]

const List: React.FC = () => {


  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default List
