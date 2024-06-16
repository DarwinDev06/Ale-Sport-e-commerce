import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../Context'
import logo from '../../assets/Logo.png'
import menuIcon from '../../assets/menu-icon.png'

/* import downArrow from '../../assets/down-arrow.png' */

const NavBar = () => {

    const context = useContext(ShoppingCartContext)
    /* const [isMenuActive, setIsMenuActive] = useState(false) */

    const [isCategoryActive, setIsCategoryActive] = useState(false)

    const activeStyle = 'underline underline-offset-4 primary-color sm:font-semibold  font-medium'

    const scroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }




    return (
        <nav className='flex justify-center sm:justify-between items-center  fixed z-[11] top-0 px-3 sm:px-5 w-full text-xl font-extraligth font-serif primary-color bg-navbar h-[72px]   rounded-xl border-b-8 border-white box-border'>
            <ul className={` ${context.isMenuActive ? 'nav-mobile' : 'hidden'}  sm:flex sm:items-center sm:gap-3 sm:w-auto `}>
                <li >
                    <NavLink 
                        to={'/'}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined   
                        }
                        onClick={() => {
                            context.setSearchByCategory(null)
                            context.setSearchByTitle(null)
                            context.setIsMenuActive(false)
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
                                context.setIsMenuActive(false)
                                
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
                                context.setIsMenuActive(false)
                                
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
                                context.setIsMenuActive(false)
                                
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
                            context.setIsMenuActive(false)
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
            <figure 
                className='flex absolute left-2 sm:hidden px-1 py-1' 
                
                onTouchStart={() => context.setIsMenuActive (context.isMenuActive ? false :true)}
                /* onClick={() => setIsMenuActive( isMenuActive ? false : true)} */>
                <img  src={menuIcon} alt='burger-menu' width={'40px'} height={'40px'}  />
            </figure>
            <ul >
                <li >
                    <NavLink className=' flex gap-1 justify-center items-center text-xl sm:text-3xl font-bold italic' 
                        to={'/'}
                        onClick={()=> {
                            scroll()
                            context.setSearchByCategory(null)
                            context.setSearchByTitle(null)
                            context.setIsMenuActive(false)
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
            <ul className='hidden sm:flex justify-end items-center w-auto gap-2 sm:text-sm  md:text-xl italic'>
                <li>
                    Ropa deportiva
                </li>
               {/*  <li className='dropdown'>
                    <img className=' cursor-pointer ' src={downArrow} alt="down arrow" width={'20px'} height={'20px'}/>
                    <div className='dropdown-content'>
                        <a className='' href="https://www.flaticon.com/free-icon/down-arrow_467264?related_id=271210&origin=search">Administrar</a>
                    </div>
                </li> */}
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