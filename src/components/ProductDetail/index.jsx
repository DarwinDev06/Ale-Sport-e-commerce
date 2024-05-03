import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../Context'


const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)
    const [selectImage,setSelectImage] = useState(context.productDetail.images[0])

    

    return (
        
        <section className='flex flex-col  w-full h-full  px-8  '>
            <p className='flex justify-center font-medium text-3xl secondary-color'>Detalles</p>
            <picture>
                <img src="" alt="" />
            </picture>
            <div className='flex flex-row justify-around gap-5  mt-2'>
                {/* foto */}
                <div className='flex flex-col w-96 h-[544px] justify-center items-center  border border-t-color rounded-lg'>
                    <picture className='w-full h-full'>
                        <img className=' w-96 h-5/6  object-cover rounded-2xl py-3 px-3 '  src={selectImage} alt={context.productDetail.title} />
                        <div className='grid grid-cols-5 gap-4 w-96 h-20  px-3 '>
                            {
                                context.productDetail.images.map( (image,index) => (
                                    
                                    <img 
                                        key={index}
                                        className='w-20 h-20 object-cover rounded-lg cursor-pointer active:border  ' 
                                        src={image} 
                                        alt='noRender'
                                        onClick={() => setSelectImage(image)}
                                    />
                                ))
                            }
                            {/* <img className='w-20 h-20 object-cover rounded-lg' src={context.productDetail?.images[0]} alt={context.productDetail.title} />
                            <img className='w-20 h-20 object-cover rounded-lg' src={context.productDetail?.images[1]} alt={context.productDetail.title} />
                            <img className='w-20 h-20 object-cover rounded-lg' src={context.productDetail?.images[2]} alt={context.productDetail.title} />
                            <img className='w-20 h-20 object-cover rounded-lg' src={context.productDetail?.images[3]} alt={context.productDetail.title} /> */}
                        </div>
                    </picture>
{/*                     <p>Calificacion</p>
                    <span>⭐⭐⭐⭐⭐</span> */}
                </div>
                {/* contenido */}
                <div className=' justify-end w-full py-2 px-10 border-t-color rounded-lg'>
                    <div className='flex flex-row gap-32 justify-between font-bold text-4xl pb-2 border-b-4  border-gray-900  border-detail primary-color'>
                        <p>{context.productDetail.title}</p>                        
                        <p>${context.productDetail.price}</p>
                    </div>
                    <p className='mt-4 font-semibold text-xl primary-color '>Descripcion</p>
                    <p className='font-normal text-lg px-2 py-4 border border-t-color rounded-md  h-40 bg-s-color/60'>{context.productDetail.description}</p>
                    <p className='mt-4 font-semibold text-xl secondary-color '>Categoria</p>
                    <p className=' font-normal text-lg px-2 py-4 border border-t-color rounded-md'> {context.productDetail.category.name}</p>
                    
                    <div className='flex justify-center items-center mt-10'>
                        <button className=' w-64 h-20 bg-t-color border-s-color primary-color font-semibold text-2xl px-6 py-3 rounded-xl btn-contact'>
                            <a href={`https://api.whatsapp.com/send?phone=+573163656084&text=${context.productDetail.title} holadarwin`} target='blank'>Enviar Mensaje</a></button>
                       {/*  <a href="intent://send/+573163656084#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">Enviar Mensaje</a> */}
                   {/*      <a href="https://api.whatsapp.com/send?phone=+573163656084&text=holadarwin">Enviar Mensaje</a> */}
                    </div>
                    
                </div>
            </div>
        </section>


    )
}

export default ProductDetail