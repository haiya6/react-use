import { useState } from 'react'
import { RouteItem, routes } from '.'

export const useAccountRoutes = () => {
  const [accountRoutes, setAccountRoutes] = useState<RouteItem[]>([])
  
  // 模拟获取权限等操作后，再设置路由
  setTimeout(() => {
    setAccountRoutes(routes)
  }, 0)

  return accountRoutes
}

export const useBackendRoute = () => {
  const accountRoutes = useAccountRoutes()
  return accountRoutes.find(route => route.path === '/backend')
}
