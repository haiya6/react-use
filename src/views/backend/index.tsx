import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout, Menu, MenuProps } from 'antd'
import Welcome from './welcome'
import Demo from './demo'
import { useAccountRoutes } from '../../routes'

const menuItems: MenuProps['items'] = [
  {
    key: 'welcome',
    label: 'Welcome'
  },
  {
    key: 'welcome2',
    label: 'Welcome2'
  }
]

const Backend: React.FC = () => {
  const accountRoutes = useAccountRoutes()

  return (
    <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
      <Layout.Sider theme="light">
        <Menu theme="light" items={menuItems} defaultSelectedKeys={['welcome']} />
      </Layout.Sider>
      <Layout.Content style={{ padding: 15 }}>
        <Routes>
          <Route index element={ <Navigate to="welcome" /> } />
          <Route path='welcome' element={<Welcome />} />
          <Route path='demo' element={<Demo />} />
        </Routes>
      </Layout.Content>
    </Layout>
  )
}

export default Backend
