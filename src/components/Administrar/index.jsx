import { useContext , useState } from "react"
import user from "../../database/user/user"
import products from "../../database/products/productos"
import ProductModal from "../ProductModal"
import { ShoppingCartContext } from "../../Context"


const Administrar = () => {
    const context = useContext(ShoppingCartContext)

   
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [isLogin,setIsLogin] = useState(false)
    /* const [isProductModal, setIsProductModal] = useState(false) */
    const [typeModal,setTypeModal] = useState({})

    /* let showFormNewProduct = false */

        
    const loginValidation = (userName,password) => {
        const userData = [...user]
        const isUserValidate = userData.find(user => user.username === userName)
        const isPassValidate = userData.find(user => user.password === password)

        if (isUserValidate && isPassValidate) {
            return setIsLogin(true)
        } else {
            alert('Datos incorrectos, verique por favor')
            setIsLogin(false)
        }
    }

    const renderView = () => {
        if(products.length > 0) {
            return (
                <>
                    {  
                        products.map((item) => (
                            <div className='flex flex-col items-center border mx-4 px-7 py-3 border-t-color rounded-lg text-center bg-q-color' key={item.id}>
                                
                                {/* <Card  data={item}/> */}
                                
                                <div className='flex  gap-2 justify-center items-center m-1 p-1 border-t-color rounded-md'>
                                    {
                                        
                                        item.images.map((image,index)=>(
                                            <img 
                                                key={index}
                                                className=' w-auto  h-44 rounded-md'
                                                src={image} 
                                                alt={item.title}  />
                                        ))
                                    }
                                </div>
                                <div className='flex gap-12 my-2'>
                                    <p><b className='secondary-color'>Titulo: </b> {item.title}</p>
                                    <p><b className='secondary-color'>Precio: </b> {item.price}</p>
                                    <p><b className='secondary-color'>Categoria: </b> {item.category.name}</p>
                                </div>

                                <p><b className='secondary-color'>Descripcion: </b> {item.description}</p>
                                <div className='flex py-3 px-3 justify-between gap-5 mt-3'>
                                    <button className='border rounded-md border-s-color secondary-color btn-editar hover:scale-110 font-bold px-2 py-1 w-24 h-10 ' onClick={()=>{handleProductModal('Editar',item); context.setIsProductModalOn(true)}}>Editar</button>
                                    <button className='border rounded-md bg-s-color quaternary-color btn-eliminar hover:scale-110 font-bold px-2 py-1 w-24 h-10 ' onClick={()=>{ handleProductModal('delete',item);context.setIsProductModalOn(true)}}>Eliminar</button>
                                </div>
                                

                            </div>
                            
                        ))
                    }
                </>
            )
        } else {
            return (
                <p>No hay productos para mostrar</p>
            )
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        loginValidation(userName,password)
    }

    const handleProductModal = (type,data) => {
        if (type === 'Editar' || type === 'delete') return setTypeModal({type:type, data:data})
        
        
        return setTypeModal({type:type, data:null})
    }

    return (
       <div className={`flex flex-col w-full justify-center items-center`}>
        
            {/* Login */}
            <section className={`${ isLogin ? 'hidden' : 'flex'} flex-col w-2/5`}>
                <p className=' primary-color font-bold text-center text-xl'>Iniciar Sesion</p>
                <form className="flex flex-col box-border border-p-color rounded-lg p-5" action="" name="login" onSubmit={handleSubmit}>
                    <label className='secondary-color font-medium text-base' htmlFor='user'>Ingrese su usuario</label>
                    <input className='secondary-color mt-1 mb-3 border-q-color focus:outline-none border-t-color rounded-sm px-1' type='email' name='username' id='user' placeholder='example@dominio.com' maxLength={'50'} required onChange={(e)=> setUserName(e.target.value)}/>
     
                    <label className='secondary-color  font-medium text-base' htmlFor='pass'>Contraseña</label>    
                    <input className='secondary-color mt-1 mb-3 border-q-color focus:outline-none border-t-color rounded-sm px-1' type='password' name='password' id='pass' placeholder='********' minLength={'8'} required onChange={(e)=>setPassword(e.target.value)}/>
                    
                    <button className='border-s-color rounded-lg w-auto mx-4 py-2 font-medium text-base secondary-color btn-contact hover:text-lg'>Entrar</button>
                </form>
            </section>
            {/* product administrator */}
            <section className={`${isLogin ? 'flex' : 'hidden'} flex-col items-center justify-center w-full`}>
 
                <p className='secondary-color hover:font-medium hover:scale-100 cursor-pointer  font-normal italic text-right text-base w-full pr-8'
                    onClick={() => {
                        setIsLogin(false)
                        context.setIsProductModalOn(false)
                    }}>Cerrar Session</p>

                <p className='secondary-color font-semibold  text-xl mt-3'>Productos</p>
                <button 
                    className={`${context.isProductModalOn ? 'hidden': 'flex'} border rounded-md p-2 my-3 font-semibold hover:font-bold btn-editar secondary-color border-s-color`} 
                    onClick={() =>{ 
                        context.setIsProductModalOn(true)
                        handleProductModal('Nuevo')
                    }}>Agregrar nuevo producto</button>
                <div className={`${context.isProductModalOn ? 'hidden' : 'grid '  } gap-12 items-center justify-center w-full mx-2 my-2`}>
                    {renderView()}
                </div>
                <div className={context.isProductModalOn ? 'flex' :' hidden'}>
                    {context.isProductModalOn && <ProductModal type={typeModal.type} data={typeModal.data}/>}
                </div>
                
            </section>
       </div>
    )
}

export default Administrar