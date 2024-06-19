
import { useRoutes, BrowserRouter} from 'react-router-dom'

import NavBar from '../../components/Navbar'
import Home from '../Home' 
import Contact from '../Contact' 
import Details  from '../Details'
import Admin from '../Admin'
import NotFound from '../NotFound'  
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
      { path: '/admin', element: <Admin/> },
      { path: '/*', element: <NotFound /> }
    ]
  )

  return routes
}



const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter> 
    </ShoppingCartProvider>

  )
}

export default App
