import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Quote from './component/Quote';

import Resturants from './component/Resturants';
import Contact from './component/Contact';
import Food from './component/Foods';
import Home from './component/Home';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter,RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
      {
        path: "/",
        element:<Home/>,

      },
   {
    path: "/quote",
    element:<Quote/>,
   },
   {
    path: "/resturants",
   element:<Resturants/>,
   }
  ,
  {
    path: "/contact",
    element:<Contact/>,
   },
   {
    path: "/food",
    element:<Food/>,
   },],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
