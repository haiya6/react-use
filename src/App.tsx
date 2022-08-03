import React from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { useAccountRoutes, useActivePaths } from './routes'

import './App.scss'

const App: React.FC = () => {
  const accountRoutes = useAccountRoutes()
  const navigate = useNavigate()
  const activePaths = useActivePaths()

  return (
    <Layout className="layout">
      <Layout.Header className="layout__header">
        <h2 className="header__title">React use</h2>
        <Menu
          className="header__menu"
          mode="horizontal"
          selectedKeys={activePaths}
          items={accountRoutes.map(route => ({ key: route.path, label: route.label }))}
          onSelect={({ key }) => navigate(key)}
        />
      </Layout.Header>
      <Layout.Content>
        <Routes>
          <Route path="/" element={ <Navigate to="/backend" /> } />
          {
            accountRoutes.map(route => {
              return (
                // path 注意需要给 "/*"
                <Route key={route.path} path={`${route.path}/*`} element={route.element} />
              )
            })
          }
          <Route path="*" element="404"></Route>
        </Routes>
      </Layout.Content>
    </Layout>
  )
}

export default App
