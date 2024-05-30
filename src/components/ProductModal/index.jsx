import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "../../Context"
import products from "../../database/products/productos"
import noImage from '../../assets/img/no-image.jpg'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import './index.css'

const ProductModal = (children) => {

    const context = useContext(ShoppingCartContext)

    const notify = (type) => {
        if(type==='save'){
        toast.success('Guardado con exito!!',{position:'top-center'})
        }
        if(type==='delete'){
            toast.warn('el Producto ha sido eliminado',{position:'top-center'})
        }
    }

    const [formData, setFormData] = useState ({
        id:products[products.length - 1].id + 1,
        title:'',
        category:'',
        description:'',
        images:''
    })

    useEffect(()=> {
        if(children.type !== 'Nuevo'){
            setFormData({
                id: children.data.id,
                title: children.data.title,
                price: children.data.price,
                category: children.data.category,
                description: children.data.description,
                images: children.data.images})
        }
        
    },[children])




    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('datos => ', formData)
        if(children.type==='Nuevo'){
            const image = [noImage]

            console.log('noimage',formData.images)
            products.push({
                id: formData.id,
                title: formData.title,
                description: formData.description,
                price: formData.price,
                category: {
                    id: 1,
                    name: formData.category,
                },
                images: (formData.images)?formData.images:image
            })
        }

        if(children.type==='Editar'){
            console.log('editar submit')
            products.map((product,index)=> {
                    console.log('chil=>',children.data.id, '|| index',index)
                if(index === children.data.id-1){
                    product.title = formData.title
                    product.price = formData.price
                    product.category = formData.category
                    product.description = formData.description
                    product.images = formData.images
                }
            })
        }

        notify('save')
        setTimeout(()=> {
            context.setIsProductModalOn(false)
        },2000)

        console.log(products)
    }

    function handleChange(event) {
        
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]:value
        })

    }

    const handleImages = (event) => {
        const files = Array.from(event.target.files)
        const fileUrl = files.map((file) => URL.createObjectURL(file))
       

        setFormData({
            ...formData,
            images: fileUrl
        })
        console.log('prueba imagenes',files)
        /* URL.revokeObjectURL(fileUrl) */
        
    }

    const categories = [
        {
            id:1,
            name:'Ropa deportiva'
        },
        {
            id:2,
            name:'medias'
        },
        {
            id:3,
            name:'Accesorios'
        }
    ]

/*     console.log('catef', children.data) */

 
    const renderCategories = () => {
        const categoriesCopy = [...categories]

        if(children.data){
            categoriesCopy.splice(categoriesCopy.findIndex(objeto=>objeto.id===children.data.category.id),1)
            return (
                <>
                <option value={children.data.category} >{children.data.category.name}</option>
                {
                
                categoriesCopy.map((category) => (
                    <option value={category.name} key={category.id} onChange={handleChange}>{category.name}</option>
                ))}
            </>
            )
        }else {
            return (
                <>
                <option value='seleccione' >seleccione</option>
                {
                
                categories.map((category) => (
                    <option value={category.name} key={category.id} onChange={handleChange}>{category.name}</option>
                ))}
            </>
            )
        }
    }
    
    const handleDelete = () => {
        products.splice(products.findIndex(product=>product.id===children.data.id),1)
        notify('delete')
        setTimeout(()=>{
            context.setIsProductModalOn(false)
        },2000)
        console.log('Productos',products)
    }
/*     useEffect(() => {
        // Añade la clase no-scroll al montar el componente
        document.body.classList.add('no-scroll');

        // Limpia la clase al desmontar el componente
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []); */

    return (
        <div className='flex flex-col  items-center justify-center absolute  top-14 left-8 w-11/12 h-auto m-5 z-10 border border-black bg-black/80 rounded-lg'>
            <ToastContainer className={'z-50 mt-24'}/>
            <form className={`${children.type !== 'delete' ? 'flex' : 'hidden'} flex-col mt-2 mb-3 px-16 py-1 rounded-lg   items-center bg-q-color`} onSubmit={handleSubmit}>
                
                <p className='font-bold text-center text-2xl primary-color mb-1'>{children.type} producto</p>
                <div className='flex flex-col mb-2 p-4 rounded-xl border border-p-color'>
                    
                    <input type="hidden" id="id" name="id" value={(children.type === 'Nuevo') ? formData.id : children.data.id} onChange={handleChange} required/>

                    <label className=' pl-2 font-semibold text-lg primary-color ' htmlFor="title" required>Titulo</label>
                    <input className='h-8 px-2 font-normal text-base secondary-color rounded-md  border-input' type="text"  id="title" name="title" value={formData.title} onChange={handleChange} required/>

                    <label className=' pl-2 mt-3 font-semibold text-lg primary-color ' htmlFor="price" required>Precio</label>
                    <input className='h-8 px-2 overflow-y-hidden   font-normal text-base secondary-color rounded-md border-input ' type="number" id="price" name="price" value={formData.price } min={1000}  onChange={handleChange} required contentEditable/>

                    <label className='pl-2 mt-3 font-semibold text-lg primary-color ' htmlFor="image" required>Descripcion</label>
                    <textarea className=' h-16 px-2 font-normal text-base secondary-color rounded-md border-input'  id="description" name="description" value={formData.description}  onChange={handleChange} required/>


                    <label className='pl-2 mt-3 font-semibold text-lg primary-color ' htmlFor="category" required>Categoria</label>
                    {/* <input className='h-8 font-normal text-base secondary-color rounded-md border-input' type="text"  id="category" name="category" value={(children.type === 'Nuevo') ? formData.title : children.data.category}  onChange={handleChange} required/> */}
                    <select  className=' select h-8 font-normal text-base secondary-color rounded-md border-input'  name="category" onChange={handleChange} >

                            {renderCategories()}
                    </select>

                    <label className='pl-2 mt-3 font-semibold text-lg primary-color ' htmlFor="image"  >imagenes</label>
                    <input className='h-20 font-normal text-base secondary-color border'  type="file" id="image" name="images" multiple    onChange={handleImages} />

                </div>
                <div className='flex gap-5 w-3/4'>
                    <button className='border-s-color rounded-lg w-1/2  mx-auto  my-2 py-2 font-medium text-base secondary-color  hover:text-lg hover:scale-110' onClick={(e)=> {e.preventDefault();context.setIsProductModalOn(false)}}>Cancelar</button>
                    <button  className='border-s-color rounded-lg w-1/2  mx-auto  my-2 py-2 font-medium text-base  btn-guardar hover:text-lg  hover:scale-105' >Guardar</button>

                </div>
            </form>
            <div className={`${children.type==='delete' ? 'flex' : 'hidden'} flex-col items-center justify-center w-3/5 px-3 rounded-lg h-60 bg-q-color border  my-40`}>
                <p className='text-lg font-semibold'>{`⚠ Estas seguro de eliminar el siguiente producto:`}</p>
                <div className='flex flex-col  justify-start my-2'>
                    <p><b>Titulo:</b>{` ${children.data?.title}`}</p>
                    <p><b>Precio:</b>{` ${children.data?.price}`}</p>
                    <p><b>Categoria:</b>{` ${children.data?.category.name}`}</p>
                </div>
                <div className='flex items-center justify-center gap-5 w-3/4 mt-3'>
                    <button className=' w-2/4 h-12 rounded-md border btn-editar border-s-color font-semibold' onClick={()=> context.setIsProductModalOn(false)}>Cancelar</button>
                    <button className=' w-2/4 h-12 rounded-md border btn-eliminar bg-p-color text-white font-semibold' onClick={() => handleDelete()}>Confirmar</button>
                </div>
            </div>
        </div>
    )
        
    
}

export default ProductModal 

