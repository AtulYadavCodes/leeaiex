import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider} from 'react-router-dom'
import Baseinfo from './Baseinfo.jsx'
import Signuplogin from './Signuplogin.jsx'
const router=createHashRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:'',
      element: <Baseinfo/>,
    },{
      path:'signuplogin',
      element:<Signuplogin/>,
    }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
