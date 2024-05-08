import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../Context'
import logo from '../../assets/Logo.png'
import burgerMenu from '../../assets/burger-menu.png'

const NavBar = () => {

    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4 primary-color sm:font-semibold  font-medium'

    const scroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const pantallaT = screen.width
    const pantalla = window.innerWidth
    console.log('Tpantalla ',pantallaT,' |  patalla ', pantalla )
    /* let isMenuActive = false */
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [isCategoryActive, setIsCategoryActive] = useState(false)

    return (
        <nav className='flex justify-center sm:justify-between items-center  fixed z-[11] top-0 px-3 sm:px-5 w-full text-xl font-extraligth font-serif primary-color bg-navbar h-[72px]   rounded-xl border-b-8 border-white box-border'>
            <ul className={` ${isMenuActive ? 'nav-mobile' : 'hidden'}  sm:flex sm:items-center sm:gap-3 sm:w-auto `}>
                <li >
                    <NavLink 
                        to={'/'}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined   
                        }
                        onClick={() => {
                            context.setSearchByCategory(null)
                            context.setSearchByTitle(null)
                            setIsMenuActive(false)
                            setIsCategoryActive(false)
                            console.log(context.searchByTitle)
                            scroll()
                        }}
                        >
                        Inicio
                    </NavLink>
                </li>
                <li className="bg-navbar dropdown ">

                    <button onTouchStart={() => setIsCategoryActive(isCategoryActive ? false : true)}>Categorias</button>
                    <div className={` ${isCategoryActive ? 'category-show' : 'hidden'}  dropdown-content`}>
                        <NavLink 
                            onClick={() => {
                                context.setSearchByCategory('Ropa deportiva')
                                setIsMenuActive(false)
                                
                                scroll()
                            }} 
                            className={({ isActive }) => 
                                isActive ? activeStyle : undefined  
                            }
                            
                            to={'/ropa-deportiva/#'} 
                            > Ropa deportiva
                        </NavLink>
                        <NavLink 
                            onClick={() => {
                                context.setSearchByCategory('medias')
                                setIsMenuActive(false)
                                
                                scroll()
                            }} 
                            className={({ isActive }) => 
                                isActive ? activeStyle : undefined   
                            }
                            to={'/medias'} 
                            >Medias
                        </NavLink>
                        <NavLink 
                            onClick={() => {
                                context.setSearchByCategory('Accesorios')
                                setIsMenuActive(false)
                                
                                scroll()
                            }} 
                            className={({ isActive }) => 
                                isActive ? activeStyle : undefined   
                            }
                            to={'/accesorios'} 
                            >Accesorios
                        </NavLink>
                    </div>
                </li>               
                <li>
                    <NavLink 
                        onClick={()=>{ 
                            setIsMenuActive(false)
                            setIsCategoryActive(false)
                            scroll()
                        }}
                        to={'/contact'}
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined   
                        }>
                        Contacto
                    </NavLink>
                </li>
            </ul>
            <figure className='flex absolute left-2 sm:hidden' onTouchStart={() => setIsMenuActive (isMenuActive ? false :true)}>
                <img  src={burgerMenu} alt='burger-menu' width={'56px'} height={'56px'}  />
            </figure>
            <ul >
                <li >
                    <NavLink className=' flex gap-1 justify-center items-center text-xl sm:text-3xl font-bold italic' 
                        to={'/'}
                        onClick={()=> {
                            scroll()
                            context.setSearchByCategory(null)
                            context.setSearchByTitle(null)
                            setIsMenuActive(false)
                            setIsCategoryActive(false)
                        }}
                        >
                            <img src={logo} alt="logo" width={'56px'} height={'56px'} />
                            <p >Ale Sport</p>
                    </NavLink>
                </li>
{/*                 <li className='text-3xl font-bold italic'>
                    <NavLink to={'/'}>
                        Ale Sport
                    </NavLink>
                </li> */}
            </ul>
            <ul className='hidden sm:flex justify-end items-center w-auto sm:text-sm  md:text-xl italic'>
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