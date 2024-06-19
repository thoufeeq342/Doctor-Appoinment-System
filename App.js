import Dashboard from "./Component/Dashboard/Dashboard";
import About from "./Component/About/About";
import Service from "./Component/Servi/Service";
import Gallery from "./Component/Gallery/Gallery";
import Contact from "./Component/Contact/Contact";
import Appointment from "./Component/Appointment/Appointment";
import Login from "./Component/Login/Login";
import Register from './Component/Register/Register'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';//import react router dom
import Doctors from "./Component/Professtional doctors/Doctors";

//lets create a router
const router = createBrowserRouter([
  {
    path:'/',
    element:<div><Dashboard/></div>
  },
  {
    path:'/about',
    element:<div><About/></div>
  },
  {
    path:'/service',
    element:<div><Service/></div>
  },
  {
    path:'/gallery',
    element:<div><Gallery/></div>
  },
  {
    path:'/contact',
    element:<div><Contact/></div>
  },
  {
    path:'/appointment',
    element:<div><Appointment/></div>
  },
  {
    path:'/login',
    element:<div><Login/></div>
  },
  {
    path:'/doctors',
    element:<div><Doctors/></div>
  },
  {
    path:'/register',
    element:<div><Register/></div>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
export default App;