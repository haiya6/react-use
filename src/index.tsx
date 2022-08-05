import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from '@/App'

import 'antd/dist/antd.min.css'
import '@/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
