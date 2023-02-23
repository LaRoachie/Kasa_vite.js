import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage, loader as homeLoader } from './pages/home/home'
import './styles/settings/settings.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DefaultLayout } from './layouts/default/default_layout'
import { ErrorPage } from './pages/error/error'
import { AboutPage } from './pages/about/about'
import { LocationPage, loader as locationLoader } from './pages/location/location'

const router = createBrowserRouter([
  {
    path:"/",
    element:<DefaultLayout/>,
    children:[
      {
        path:"",
        element:<HomePage/>,
        loader:homeLoader
      },
      {
        path:"/about",
        element:<AboutPage/>
      },
      {
        path:"/location/:logementId",
        element:<LocationPage/>,
        loader:locationLoader
      }
    ],
    errorElement:<ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
