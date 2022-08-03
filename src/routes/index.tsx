import { AlignLeftOutlined, RedditCircleFilled, SmileFilled } from '@ant-design/icons'
import Backend from '@/views/backend'
import BackendWelcome from '@/views/backend/welcome'
import BackendDemo from '@/views/backend/demo'
import BackendCRUD from '@/views/backend/crud'

import Unknown from '@/views/unknown'

export * from './useActivePaths'
export * from './useRoutes'

export interface RouteItem {
  // route path(key) unique!
  // full path starts width /
  path: string
  // menu label
  label: string
  // menu icon
  icon?: React.ReactNode
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
        icon: <SmileFilled />,
        element: <BackendWelcome />,
      },
      {
        path: '/backend/demo',
        label: 'Demo',
        icon: <RedditCircleFilled />,
        element: <BackendDemo />,
      },
      {
        path: '/backend/curd',
        label: 'CRUD',
        icon: <AlignLeftOutlined />,
        element: <BackendCRUD />
      }
    ]
  },
  {
    path: '/unknown',
    label: 'Unknown',
    element: <Unknown />
  }
]
