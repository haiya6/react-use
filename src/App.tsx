import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Layout, Menu, MenuProps } from 'antd'
import Backend from './views/backend'

import './App.scss'

const menuItems: MenuProps['items'] = [
  {
    key: 'backend',
    label: 'Basic Backend'
  }
]

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Layout.Header className="layout__header">
          <h2 className="header__title">React use</h2>
          <Menu
            className="header__menu"
            mode="horizontal"
            defaultSelectedKeys={['backend']}
            items={menuItems}
          />
        </Layout.Header>
        <Layout.Content>
          <Routes>
            <Route path="/" element={ <Navigate to="/backend" /> } />
            <Route path="/backend/*" element={<Backend />} />
          </Routes>
        </Layout.Content>
      </Layout>
    </BrowserRouter>
  )
}

export default App
