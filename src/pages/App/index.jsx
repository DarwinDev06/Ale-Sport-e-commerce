import { BrowserRouter, useRoutes } from 'react-router-dom'

import Home from '../Home'
import Contact from '../Contact'
import NotFound from '../NotFound'
import Details  from '../Details'
import NavBar from '../../components/Navbar'
import {ShoppingCartProvider}  from '../../Context'

import './App.css'


const AppRoutes = () => {
  let routes = useRoutes(
    [
      { path: '/',  element: <Home /> },
      { path: '/ropa-deportiva',  element: <Home filter={'Ropa deportiva'}/> },
      { path: '/medias',  element: <Home filter={'medias'}/> },
      { path: '/accesorios',  element: <Home filter={'Accesorios'}/> },
      { path: '/details', element: <Details /> },
      { path: '/contact', element: <Contact /> },
      { path: '/*', element: <NotFound /> }
    ]
  )

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
