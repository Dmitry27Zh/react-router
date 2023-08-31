import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './app/components/home'
import Login from './app/components/login'
import Posts from './app/components/posts'
import Dashboard from './app/components/dashboard'

const root = ReactDOM.createRoot(document.getElementById('root'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
)

reportWebVitals()
