import "./App.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./layout/app.layout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./layout/dashboard";
import Auth from "./layout/auth";
import RedirectLink from "./layout/redirect-link";
import Link from "./layout/link";


const router=createBrowserRouter([{
  element:<AppLayout/>,
  children:[                                 
    {
      path : "/",
      element:<LandingPage/>
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    },
    {
      path:"/auth",
      element:<Auth/>

    },
    {
      path:"/link/:id",
      element:<Link/>
    },
    {
      path:"/:id",
      element:<RedirectLink/>
    }

  ]  
}]);

function App() {
  

  return (
    <RouterProvider router={router}/> 
    
  )
}

export default App;
