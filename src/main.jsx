import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Review from './components/OrderReveiw/Review';
import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')
      },
      {
        path: "review",
        element: <Review></Review>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
