import Backend from './views/backend'
import BackendWelcome from './views/backend/welcome'
import BackendDemo from './views/backend/demo'

export interface RouteItem {
  key: string
  // route path
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

export const backendRoutes: RouteItem[] = [
  {
    key: 'welcome',
    path: '/backend/welcome',
    label: 'Welcome',
    element: <BackendWelcome />,
  },
  {
    key: 'demo',
    path: '/backend/demo',
    label: 'Demo',
    element: <BackendDemo />,
  }
]

const routes: RouteItem[] = [
  {
    key: 'backend',
    path: '/backend',
    label: 'Basic Backend',
    element: <Backend />
  }
]

export default routes
