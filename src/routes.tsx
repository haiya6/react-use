import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Backend from './views/backend'
import BackendWelcome from './views/backend/welcome'
import BackendDemo from './views/backend/demo'

import Unknown from './views/unknown'

export interface RouteItem {
  // route path(key) unique!
  // full path starts width /
  path: string
  // menu label
  label: string
  // permission
  permission?: string
  // route element
  element: React.ReactNode
  // route children
  children?: RouteItem[]
}

export const routes: RouteItem[] = [
  {
    path: '/backend',
    label: 'Basic Backend',
    element: <Backend />,
    children: [
      {
        path: '/backend/welcome',
        label: 'Welcome',
        element: <BackendWelcome />,
      },
      {
        path: '/backend/demo',
        label: 'Demo',
        element: <BackendDemo />,
      }
    ]
  },
  {
    path: '/unknown',
    label: 'Unknown',
    element: <Unknown />
  }
]

export const useAccountRoutes = () => {
  const [accountRoutes, setAccountRoutes] = useState<RouteItem[]>([])
  
  // 模拟获取权限等操作后，再设置路由
  setTimeout(() => {
    setAccountRoutes(routes)
  }, 0)

  return accountRoutes
}

export const useActivePaths = () => {
  const location = useLocation()
  const accountRoutes = useAccountRoutes()
  const [activePaths, setActivePaths] = useState<string[]>([])

  useEffect(() => {
    const paths: string[] = []
    const locationPaths = location.pathname.split('/').slice(1)

    let depth = 0
    let currentRoutes: RouteItem[] | undefined = accountRoutes

    while(currentRoutes) {
      for(let i = 0; i < currentRoutes!.length; i++) {
        const route = currentRoutes![i] as RouteItem
        const routePaths = route.path.split('/').slice(1)
        if (locationPaths[depth] === routePaths[depth]) {
          paths.push(route.path)
          currentRoutes = route.children
          depth++
          break
        }
      }
      currentRoutes = undefined
    }

    setActivePaths(paths)

  }, [location, accountRoutes])

  return activePaths
}
