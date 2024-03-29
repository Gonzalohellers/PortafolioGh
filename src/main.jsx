import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './componentes/navbar/nav'
import Presentacion from './componentes/presentacion/presentacion'
import './index.css'
import Educacion from './componentes/educacion/educacion'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error/routerError'
import LoginForm from './componentes/logIn/login'
import RegisterForm from './componentes/register/register'
import Tecnolotrix from './componentes/tecnolotrix/tecnolotrix'
import Contacto from "./componentes/contacto/contacto"
import Footer from './componentes/footer/footer'
import { Analytics } from '@vercel/analytics/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>  
      <Nav />
      <Presentacion />
      <Educacion />
      <Tecnolotrix />
      <Contacto />
      <Footer />
      <Analytics />
    </>,
    errorElement: <ErrorPage />,
  },
  {
    path: "login/",
    element: <LoginForm />,
  },
  {
    path: "register/",
    element: <RegisterForm />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
