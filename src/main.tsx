import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import RulesPage from './pages/RulesPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/rules',
        element: <RulesPage />
      },
      {
        path: '/setup',
        element: <RulesPage />
      },
      {
        path: '/game',
        element: <RulesPage />
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
