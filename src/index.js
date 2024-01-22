import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddBlog from './components/AddBlog';
import Blogs from './components/Blogs';
import SignIn from './components/SignIn';
import SignIn2 from './components/SignIn2';
import About from './components/About'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Blogs/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/signin",
        element:<SignIn2/>
      },
      {
        path:"/addblog",
        element:<AddBlog/>
      },
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
