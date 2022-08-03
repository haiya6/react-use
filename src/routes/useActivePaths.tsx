import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { RouteItem, useAccountRoutes } from '.'

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