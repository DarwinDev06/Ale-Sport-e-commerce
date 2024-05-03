import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link,  } from 'react-router-dom'

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (product) => {
        context.setProductDetail(product)
        console.log('card product', product)
        console.log('carproduct', context.productDetail)
    }
    return (

        <div className=' flex justify-end bg-card w-64 h-72 border-solid cursor-pointer z-10' >
{/*             <span 
                className='add-to-cart   flex justify-center items-center absolute bg-white/60 rounded-full w-6 h-6 m-2 p-1 z-20'
                onClick={() => context.setCount(context.count + 1 )}
            >+
            </span> */}

            <Link className=' z-10 flex flex-col justify-center items-center h-full w-full ' to={'/details'}
                
            >
                <div className='  h-full w-full' onClick={() => showProduct(data.data)}>
                    <figure className='relative  mb-1 w-full h-4/5'>
                    <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg ml-2 mb-2 px-1 py-0'>{data.data.category.name}</span>
                    <img src={data.data.images[0]} alt={data.data.title} className=' h-full w-full object-cover  p-1 rounded-lg' />
                    {/*   <span 
                        className='add-to-cart absolute top-0 right-0 flex justify-center items-center bg-white/60 rounded-full w-6 h-6 m-2 p-1 z-20'
                        onClick={() => context.setCount(context.count + 1 )}
                    >+</span>  */}
                    </figure>
                    <p className=' flex flex-col justify-center items-center '>
                        <span className=' font-extrabold'>${data.data.price}</span>
                        <span>{data.data.title}</span>
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Card