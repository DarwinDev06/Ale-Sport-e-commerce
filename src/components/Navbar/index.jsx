import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import logo from '../../assets/Logo.png'

const NavBar = () => {

    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4 primary-color font-bold'
    const scroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

    return (
        <nav className='flex justify-between items-center  fixed z-10 top-0 px-5 w-full text-xl font-extraligth font-serif primary-color bg-navbar navHeight  rounded-xl border-b-8 border-white box-border'>
            <ul className='flex items-center gap-3 w-80 h-14'>
                <li >
                    <NavLink 
                        to={'/'}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined   
                        }
                        onClick={() => {
                            context.setSearchByCategory(null)
                            context.setSearchByTitle(null)
                            console.log(context.searchByTitle)
                            scroll()
                        }}
                        >
                        Inicio
                    </NavLink>
                </li>
                <li className="bg-navbar dropdown">

                    <button>Categorias</button>
                    <div className="dropdown-content">
                        <NavLink 
                            onClick={() => {
                                context.setSearchByCategory('Ropa deportiva')
                                scroll()
                            }} 
                            to={'/ropa-deportiva/#'} 
                            >Ropa deportiva
                        </NavLink>
                        <NavLink 
                            onClick={() => {
                                context.setSearchByCategory('medias')
                                scroll()
                             }} 
                            to={'/medias'} 
                            >Medias
                        </NavLink>
                        <NavLink 
                            onClick={() => {
                                context.setSearchByCategory('Accesorios')
                                scroll()
                            }} 
                            to={'/accesorios'} 
                            >Accesorios
                        </NavLink>
                    </div>
                </li>               
                <li>
                    <NavLink 
                        onClick={()=> scroll()}
                        to={'/contact'}
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined   
                        }>
                        Contacto
                    </NavLink>
                </li>
            </ul>
            <ul className='flex gap-1 justify-center items-center w-80 h-14'>
                <li >
                    <NavLink className=' flex gap-1 justify-center items-center text-3xl font-bold italic' 
                        to={'/'}
                        onClick={()=> {
                            scroll()
                            context.setSearchByCategory(null)
                            context.setSearchByTitle(null)
                        }}
                        >
                            <img src={logo} alt="logo" className=' w-14 h-14 '/>
                            <p >Ale Sport</p>
                    </NavLink>
                </li>
{/*                 <li className='text-3xl font-bold italic'>
                    <NavLink to={'/'}>
                        Ale Sport
                    </NavLink>
                </li> */}
            </ul>
            <ul className='flex justify-end items-center w-80 h-14 italic'>
                <li>
                    Ropa deportiva
                </li>
{/*                 <li className='flex ml-4 '>
                    <span>🛒</span>
                    <p className=' absolute top-0 right-0 mr-2'>{context.count}</p>
                </li> */}
            </ul>
        </nav>
        
    )
}

export default NavBar


{/* <div class="dropdown">
  <button>HubSpot Resources</button>
  <div class="dropdown-content">
    <a href="https://blog.hubspot.com/">Blog</a>
    <a href="https://academy.hubspot.com/">Academy</a>
    <a href="https://www.youtube.com/user/hubspot">YouTube</a>
  </div>
</div> */}