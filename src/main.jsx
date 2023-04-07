import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import About from './components/About/About';
import Review from './components/Review/Review';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('data.json')

      },
      {
        path: "/review",
        element: <Review></Review>

      },
      {
        path: "/about",
        element: <About></About>

      },
      {
        path: "/login",
        element: <Login></Login>

      },
    ]

  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />


  </React.StrictMode>,
)
