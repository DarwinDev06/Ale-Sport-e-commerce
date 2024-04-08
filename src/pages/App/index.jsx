import { BrowserRouter, useRoutes } from 'react-router-dom'

import Home from '../Home'
import Contact from '../Contact'
import NotFound from '../NotFound'
import { Details } from '../Details'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes(
    [
      { path: '/',  element: <Home /> },
      {path: '/details', element: <Details />},
      { path: '/contact', element: <Contact />},
      { path: '/*', element: <NotFound />}
    ]
  )

  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
