import React from 'react'
import { Table, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { LineChartOutlined } from '@ant-design/icons'
import Mock from 'mockjs'

interface DataType {
  key: string
  InstanceId: string
  InstanceName: string
  InstanceState: 'RUNNING' | 'SHUTDOWN'
  Zone: string
  InstanceType: string
  CPU: number
  Memory: number
  InternetMaxBandwidthOut: number
  PrivateIpAddresses: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID/名称',
    key: 'InstanceId',
    render: (_, record) => {
      return (
        <>
          <a href="#">{record.InstanceId}</a>
          <br />
          <span>{record.InstanceName}</span>
        </>
      )
    }
  },
  {
    title: '状态',
    dataIndex: 'InstanceState',
    render: (_, record) => {
      if (record.InstanceState === 'RUNNING') {
        return (
          <>
            <LineChartOutlined style={{ color: 'green' }} />
            <span style={{ marginLeft: 5 }}>运行中</span>
          </>
        )
      }
      return (
        <span style={{ color: 'red' }}>已关机</span>
      )
    }
  },
  {
    title: '可用区',
    dataIndex: 'Zone'
  },
  {
    title: '实例类型',
    dataIndex: 'InstanceType'
  },
  {
    title: '实例配置',
    key: 'cpu',
    render(_, record) {
      return `${record.CPU}核 ${record.Memory}GB ${record.InternetMaxBandwidthOut}Mbps`
    }
  },
  {
    title: '主IPv4地址',
    key: 'PrivateIpAddresses',
    render(_, record) {
      return `${record.PrivateIpAddresses} (内)`
    }
  },
  {
    title: '操作',
    key: 'action',
    render() {
      return (
        <>
          <Button type="link">续费</Button>
        </>
      )
    }
  }
]

function generateData(q: number): DataType[] {
  return new Array(q).fill(0).map(() => {
    const id = `ins-${Mock.Random.word(8)}`

    return {
      key: id,
      InstanceId: id,
      InstanceName: Mock.Random.last(),
      InstanceState: Math.random() > 0.2 ? "RUNNING": "SHUTDOWN",
      Zone: `广东${Mock.Random.integer(1, 10)}区`,
      InstanceType: 'SA2.LARGE8',
      CPU: Mock.Random.integer(1, 8),
      Memory: Mock.Random.integer(4, 16),
      InternetMaxBandwidthOut: 100,
      PrivateIpAddresses: Mock.Random.ip()
    }
  })
}

const List: React.FC = () => {
  return (
    <Table columns={columns} dataSource={generateData(5)} />
  )
}

export default List
