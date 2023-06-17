import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserContextProvider } from './contexts/UserContext.jsx'
import { TaskContextProvider } from './contexts/TaskContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <TaskContextProvider>
      <App />
      </TaskContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
