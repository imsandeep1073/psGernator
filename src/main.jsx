import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'rsuite/dist/rsuite.min.css'
// import CustomeHook from './CustomeHook'
import Todo from './component/Todo'


createRoot(document.getElementById('root')).render(
  <StrictMode>

      <Todo />
    
  </StrictMode>,
)