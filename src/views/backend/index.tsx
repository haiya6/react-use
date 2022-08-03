import React, { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Button, Layout, Menu } from 'antd'
import { useBackendRoute, useActivePaths } from '@/routes'

import './index.scss'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

const Backend: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const backendRoute = useBackendRoute()
  const activePaths = useActivePaths()
  const navigate = useNavigate()

  if (!backendRoute || !backendRoute.children) {
    return null
  }

  return (
    <Layout className="backend-layout">
      <Layout.Sider theme="light" collapsed={collapsed}>
        <Menu 
          theme="light"
          items={backendRoute.children.map(route => ({ key: route.path, label: route.label, icon: route.icon }))} 
          selectedKeys={activePaths}
          onSelect={({ key }) => navigate(key)}
        />
      </Layout.Sider>
      <Layout.Content>
        <Layout.Header className="content__header">
          <Button 
            type="text" 
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Layout.Header>
        <Layout.Content className="content__content">
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
      </Layout.Content>
    </Layout>
  )
}

export default Backend
