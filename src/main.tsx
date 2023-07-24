import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './globalStyles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
