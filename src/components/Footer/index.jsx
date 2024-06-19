import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'


import logo from '../../assets/Logo-contact.png'
import whatsappIcon from '../../assets/whatsapp.png'
import instagramIcon from '../../assets/instagram.png'
import facebookIcon from '../../assets/facebook.png'
import tiktokIcon from '../../assets/tik-tok.png'


const Footer = () => {

    return (
        <section className='flex flex-col pb-1 pt-4 px-2 sm:px-5  primary-color mt-8  mb-2  rounded-lg border-fotter' >
            <div className='grid sm:grid-cols-2 gap-2 items-center justify-center mx-5 pb-5 border-b-4 border-g'>
                <div className='flex flex-col items-center  justify-center'>
                    <figure className=' items-center justify-center'>
                       {/*  <img src={logo} alt='logo' width={'100px'} height={'100px'}/> */}
                        <LazyLoadImage src={logo} alt='logo' style={{width:'100px', height:'100px'}}/>
                    </figure>
                    <p className=' font-bold text-xl pb-2'>Ale Sport</p>
                    <p className=' font-medium text-center text-base italic pb-2'>Ropa deportiva para tu mejor versión</p>
                </div>
                <article className='flex flex-col items-center justify-center px-4 sm:px-12 pb-2 text-center italic'>
                    {` "El mejor momento para plantar un árbol era hace 20 años. El segundo mejor momento es ahora." (Proverbio chino)`}
                </article>
            </div>
            <div className='flex flex-col items-center  pt-3 pb-1'>
                <div className='flex flex-row gap-5  '>
                    <a className='flex flex-row hover:scale-110' href="https://api.whatsapp.com/send?phone=+573052551897&text=Hola Aleja sport, estoy interesad@ en tus productos..." target="_blank" rel="noopener noreferrer">
                        <figure>
                            <LazyLoadImage className=' object-fill' src={whatsappIcon} alt='whatsappIcon' width={'30px'} height={'30px'} />
                        </figure>
                    </a>
                    <a className='flex flex-row hover:scale-110' href="https://www.instagram.com/ale.sport.t" target="_blank" rel="noopener noreferrer">
                        <figure>
                            <LazyLoadImage  className=' object-fill' src={instagramIcon} alt='instagramIcon' width={'30px'} height={'30px'} />
                        </figure>
                    </a>
                    <a className='flex flex-row hover:scale-110' href="https://www.facebook.com/amarstoreco6" target="_blank" rel="noopener noreferrer">
                        <figure>
                            <LazyLoadImage className=' object-fill'  src={facebookIcon} alt='facebookIcon' width={'30px'} height={'30px'} />
                        </figure>
                    </a>
{/*                     <a className='flex flex-row hover:scale-110' href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                        <figure >
                            <LazyLoadImage  className=' object-fill' src={tiktokIcon} alt='tiktokIcon' width={'30px'} height={'30px'}/>
                        </figure>
                    </a> */}
                </div>
                <p className=' pt-3 pb-5'>© Copyright 2024</p>
            </div>
        </section>
    )
}

export default Footer