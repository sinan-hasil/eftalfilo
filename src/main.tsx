import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './pages/contact/Contact';
import Root from './pages/root/Root';
import Mainpage from './pages/mainpage/Mainpage';
import "bootstrap/dist/css/bootstrap.min.css"
import Cars from './pages/cars/Cars';
import Request from './pages/request/Request';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Mainpage />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cars",
        element: <Cars />
      },
      {
        path: "/request",
        element: <Request />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
