import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main/Main.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Blog from './Components/Blog/Blog.jsx';
import AddToys from './Components/AddToys/AddToys.jsx';
import AllToys from './Components/AllToys/AllToys.jsx';
import ToyDetails from './Components/ToyDetails/ToyDetails.jsx';
import MyToys from './Components/MyToys/MyToys.jsx';
import UpdateToy from './Components/UpdateToy/UpdateToy.jsx';
import PageNotFound from './Components/PageNotFound/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'blog',
    element: <Blog></Blog>
  },
  {
    path: 'addtoys',
    element: <AddToys></AddToys>
  },
  {
    path: 'alltoys',
    element: <AllToys></AllToys>,
    loader: () => fetch('http://localhost:5000/alltoys')
  },
  {
    path: 'alltoys/:id',
    element: <ToyDetails />,
    loader: ({params}) => fetch(`http://localhost:5000/alltoys/${params.id}`)
  },
  {
    path: 'mytoys',
    element: <MyToys></MyToys>,
    loader: () => fetch('http://localhost:5000/mytoys')
  },
  {
    path: 'updatetoys/:id',
    element: <UpdateToy></UpdateToy>,
    loader: ({params}) => fetch(`http://localhost:5000/mytoys/${params.id}`)
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
