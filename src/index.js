import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import Schools from './Features/Schools';
import AddStudent from './Features/AddStudent';
import Addmanager from './Features/Addmanager';
import AddBranch from './Features/AddBranch';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path:'/School',
      element:<Schools></Schools>,
    },
    {
      path:'/add',
      element:<AddStudent></AddStudent>,
    },
    {
      path:'/branch',
      element:<AddBranch></AddBranch>,
    },
    {
      path:'/addmanager',
      element:<Addmanager></Addmanager>,
    },
  ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
