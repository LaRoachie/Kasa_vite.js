import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomePage, loader as homeLoader } from './pages/home/home'
import { DefaultLayout } from './layouts/default/default_layout'
import { ErrorPage } from './pages/error/error'
import { AboutPage, loader as aboutLoader } from './pages/about/about'
import { LocationPage, loader as locationLoader } from './pages/location/location'

import './styles/settings/settings.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: homeLoader
      },
      {
        path: "/about",
        element: <AboutPage />,
        loader: aboutLoader
      },
      {
        path: "/location/:logementId",
        element: <LocationPage />,
        loader: locationLoader
      }
    ],
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
