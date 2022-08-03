import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { useBackendRoute, useActivePaths } from '@/routes'

const Backend: React.FC = () => {
  const backendRoute = useBackendRoute()
  const activePaths = useActivePaths()
  const navigate = useNavigate()

  if (!backendRoute || !backendRoute.children) {
    return null
  }

  return (
    <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
      <Layout.Sider theme="light">
        <Menu 
          theme="light" 
          items={backendRoute.children.map(route => ({ key: route.path, label: route.label }))} 
          selectedKeys={activePaths}
          onSelect={({ key }) => navigate(key)}
        />
      </Layout.Sider>
      <Layout.Content style={{ padding: 15 }}>
        <Routes>
          <Route index element={ <Navigate to="welcome" /> } />
          {
            backendRoute.children.map(route => {
              return (
                <Route 
                  key={route.path} 
                  path={route.path.replace(new RegExp(`^${backendRoute.path}`), '')} 
                  element={route.element} 
                />
              )
            })
          }
        </Routes>
      </Layout.Content>
    </Layout>
  )
}

export default Backend
