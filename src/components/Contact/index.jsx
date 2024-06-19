import { LazyLoadImage } from 'react-lazy-load-image-component'
import whatsappIcon from '../../assets/whatsapp.png'
import instagramIcon from '../../assets/instagram.png'
import facebookIcon from '../../assets/facebook.png'
import mediosPagos from '../../assets/mediosdepago.png'


const nosotros = `Ale Sport, tu destino para la moda deportiva más trendy en Ibagué y más allá! En nuestra tienda virtual, encontrarás una amplia gama de prendas de vestir y accesorios que combinan estilo, comodidad y calidad.

¿Qué nos hace destacar? Nuestra selección cuidadosa de ropa deportiva en tendencia, lo mejor de todo es que garantizamos la disponibilidad inmediata de muchas de nuestras prendas, listas para ser enviadas a cualquier parte del país. Además, si no encuentras lo que buscas en nuestra tienda, no te preocupes. Aceptamos pedidos por encargo, asegurando que obtengas exactamente lo que deseas.

En Ale Sport, la calidad es nuestra promesa. Cada artículo que ofrecemos está respaldado por nuestro compromiso con productos duraderos y de alto rendimiento. 

¡Explora nuestra tienda virtual hoy mismo y descubre cómo Ale Sport puede elevar tu estilo deportivo al siguiente nivel!💖🔥🆒`

const mision = `En Ale Sport, nos comprometemos a proporcionar a nuestros clientes la mejor experiencia en la compra de ropa deportiva de alta calidad. Nuestra misión es inspirar y apoyar a las personas en su búsqueda de un estilo de vida activo y saludable, ofreciendo productos que combinen funcionalidad, comodidad y estilo.`

const vision = `En Ale Sport, aspiramos a ser el destino preferido para todos los entusiastas del deporte y el fitness, ofreciendo una experiencia de compra única que inspire, motive y empodere a nuestros clientes para alcanzar sus metas atléticas y adoptar un estilo de vida activo y saludable.`





const ContactMe = () => {
    return (
        
        <section className='flex flex-col w-full justify-center items-center py-3'>
            <p className='primary-color font-bold text-2xl'>Nosotros</p>
            <p className=' whitespace-break-spaces px-5 sm:px-8 text-lg font-extralight mt-1 text-justify'>
                {nosotros}
            </p>
            <div className=' grid sm:grid-cols-2 justify-between items-center gap-3 sm:gap-16 mt-8 px-5 sm:w-9/12  sm:px-8  pb-3'>
                <p className='flex flex-col items-center border border-t-color px-3 py-2 sm:h-full rounded-lg box-border bg-q-color'>
                    <span className=' font-semibold text-xl secondary-color border-b-2  px-3'>Misión</span>
                    <span className=' font-extralight text-justify italic'>{mision}</span>
                </p>
                <p className='flex flex-col items-center border border-t-color px-3 py-2 sm:h-full rounded-lg box-border bg-q-color'>
                    <span className=' font-semibold text-xl secondary-color border-b-2  px-3'>Visión</span>
                    <span className=' font-extralight text-justify italic'>{vision}</span>
                </p>
            </div> 

            
                <section className=' flex flex-col items-center w-full sm:w-9/12 px-5 sm:px-8 py-8 mt-3 '>
                    <p className='primary-color  font-semibold text-2xl mb-2'>Contacto</p>
                        <p className=' text-justify sm:text-center font-light'>En Ale Sport, nos destacamos por nuestra amplia variedad de prendas, algunas disponibles para entrega inmediata y otras por encargo. Nuestro compromiso es ofrecerte productos de calidad y un servicio excepcional.</p>
                        <div className='grid sm:grid-cols-2 gap-4 mt-4'> 
                            <div className='border-s-color rounded-lg py-2'>
                                <p className='text-center font-semibold text-lg secondary-color'>Ubicación</p>
                                <ul className=' px-2 py-2 font-light'>
                                    <li className='flex '>📍 <p className='pl-3'>Estamos ubicados en Ibagué Tolima</p> </li>
                                    <li className='flex '>🛵 <p className='pl-1'>Domicilios contraentrega en Ibagué Tolima</p></li>
                                    <li className='flex'>🚛 <p className='pl-1'>envios nacionales 100% seguros</p></li>
                                </ul>
                            </div>
                            <div className='border-s-color rounded-lg py-2'>
                                <p className='text-center font-semibold text-lg secondary-color'>Horarios de atención 🕗</p>
                                <ul className='px-2 py-2 font-light'>
                                    <li className='flex'>📱 <p className='pl-1'> atencion por whatsapp de 8:00 a.m a 9:00 p.m todos los dias</p></li>
                                    <li className='flex'>🛵 <p className='pl-1'> envios contraentrega de 8:00 a.m a 8:00 p.m todos los dias</p></li>
                                    <li className='flex'>🚛 <p className='pl-1'> envios nacionales de 10:00 a.m a 4:00 p.m de lunes a sabado</p></li>
                                </ul>
                            </div>
                        </div>
                        <p className=' primary-color font-semibold text-center text-xl mt-5'>Contáctanos</p>
                        <div className='flex flex-col sm:flex-row sm:w-full items-center sm:justify-center mt-5 gap-3'>
                            <a className='flex flex-row  max-[639px]:w-full group items-center   mx-2 hover:scale-110' href="https://api.whatsapp.com/send?phone=+573052551897&text=Hola Aleja sport, estoy interesad@ en tus productos..." target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img className=' object-fill ' src={whatsappIcon} alt='whatsappIcon' width={'30px'} height={'30px'} />
                                </figure>
                                <p className=' ml-2 group-hover:font-semibold'>+57 3052551897 </p>
                            </a>
                        
                            <a className='flex flex-row max-[639px]:w-full group items-center   mx-2 hover:scale-110' href="https://www.instagram.com/ale.sport.t" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img  className=' object-fill' src={instagramIcon} alt='instagramIcon' width={'30px'} height={'30px'} />
                                </figure>
                                <p className=' ml-2 group-hover:font-semibold'>ale.sport.t</p>
                            </a>
                        
                            <a className='flex flex-row max-[639px]:w-full group items-center   mx-2 hover:scale-110' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img className=' object-fill'  src={facebookIcon} alt='facebookIcon' width={'30px'} height={'30px'} />
                                </figure>
                                <p className=' ml-2 group-hover:font-semibold'>amarstoreco6</p>
                            </a>
        
{/*                             <a className='flex flex-row max-[639px]:w-full items-center  box-content  mx-2 group hover:scale-110  ' href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                                <figure >
                                    <img  className=' object-fill' src={tiktokIcon} alt='tiktokIcon' width={'30px'} height={'30px'}/>
                                </figure>
                                <p className=' ml-2 group-hover:font-semibold'>Ticktock</p>
                            </a> */}
                        </div>
                    <figure className='flex flex-col mt-10'>
                        <span className='primary-color text-center text-xl font-semibold'>Información medios de pago</span>
                        <LazyLoadImage className='border object-cover mb-2 mt-2 rounded-lg' src={mediosPagos} alt="medios de pagos" width={'300px'} height={'400px'}/>
                    </figure>

                </section>
                
                <section className=' flex flex-col items-center justify-center sm:w-10/12  p-5 sm:px-8  sm:py-8'>
                    <p className='primary-color font-semibold text-2xl mb-2'> Marcas recomendadas</p>
                    <div className='grid sm:grid-cols-2 gap-3 justify-center items-center'>

                        <div className='flex flex-col bg-marca items-center border-t-color py-2 px-2  sm:h-full rounded-lg'>
                            <p className='primary-color text-lg font-medium'> Juana Store</p>
                            <p className='primary-color text-sm font-medium'> Accesorios</p>
                            <p className='primary-color text-xs font-medium'> Ibagué Tolima</p>
                            <div className='flex flex-row my-2'>
                                <figure className='flex gap-3 xl:gap-0 sm:justify-between'>
                                    <a className='flex group hover:scale-110' href="https://www.instagram.com/juana_store08/" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={instagramIcon} alt='instagramIcon' title='Instagram' width={'30px'} height={'30px'} />
                                        <p className=' hidden xl:flex mr-2 font-normal text-base secondary-color'>Instagram</p>
                                    </a>
                                    <a className='flex group hover:scale-110' href="https://api.whatsapp.com/send?phone=+573156027683&text=Hola Juana, Estoy interesad@ en tus productos..." target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={whatsappIcon} alt='whatsappIcon' width={'30px'} height={'30px'} />
                                        <p className='hidden xl:flex mr-2 font-normal text-base secondary-color'>WhatsApp</p>
                                    </a>
                                    <a className='flex group hover:scale-110' href="https://www.facebook.com/juanamakeup08" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={facebookIcon} alt='facebookIcon' width={'30px'} height={'30px'} />
                                        <p className='hidden xl:flex mr-2 font-normal text-base secondary-color'>Facebook</p>
                                    </a>
                                </figure>
                            </div>
                            <p className=' h-full font-extralight mx-1 text-justify'>En nuestra tienda virtual Juana Store te ofrecemos distintos tipos de accesorios como aretes, pulseras, collares, accesorios para tu celular, decoraciones para esferos y lapiz, collares para tu mascota. tambien puedes solicitar tus accesorios personalizados a tus gustos, te invitamos seguirnos en nuestras redes y ponerte en contacto para que adquieras tus accesorios al mejor estilo.</p>
                        </div>

                        <div className='flex flex-col bg-marca items-center border-t-color py-2 px-2 sm:h-full rounded-lg'>
                            <p className='primary-color text-lg font-medium'> Alejandra Quevedo</p>
                            <p className='primary-color text-sm font-medium'> Cejas & pestañas</p>
                            <p className='primary-color text-xs font-medium'> Ibagué Tolima</p>
                            <div className='flex flex-row mt-2 mb-2'>
                                <figure className='flex gap-3 xl:gap-0 justify-between'>
                                    <a className='flex group hover:scale-110' href="https://www.instagram.com/alejandraq.cejasypestanas/" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={instagramIcon} alt='instagramIcon' width={'30px'} height={'30px'} />
                                        <p className='hidden xl:flex mr-2 font-normal text-base secondary-color'>Instagram</p>
                                    </a>
{/*                                     <a className='flex group hover:scale-110' href="https://www.whatsapp.com/?lang=es" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={whatsappIcon} alt='whatsappIcon' width={'30px'} height={'30px'} />
                                        <p className='hidden xl:flex mr-2 font-normal text-base secondary-color'>WhatsApp</p>
                                    </a>
                                    <a className='flex group hover:scale-110' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={facebookIcon} alt='facebookIcon' width={'30px'} height={'30px'} />
                                        <p className='hidden xl:flex mr-2 font-normal text-base secondary-color'>Facebook</p>
                                    </a> */}
                                </figure>
                            </div>
                            <p className=' font-extralight mx-1 text-justify'>{'Tenemos el gusto de ofrecerte servicios para tus cejas:Diseño de cejas, depilacion en cera, depilacion en hilo, pigmentación con henna, laminado de cejas. \n Tambien ofrecemos servicios para tus pestañas: Pestaña punto a punto, lifting de pestañas, pestañas pelo a pelo. Para que luscas una mirada increible'}</p>
                        </div>

                        <div className='flex flex-col bg-marca items-center border-t-color py-2 px-2 sm:h-full rounded-lg'>
                            <p className='primary-color text-lg font-medium'> Doncelle_hg Nails & Lashes</p>
                            <p className='primary-color text-sm font-medium'> By Heidy Gonzalez</p>
                            <p className='primary-color text-xs font-medium'> Ibagué Tolima</p>
                            <div className='flex flex-row mt-2 mb-2'>
                                <figure className='flex gap-3 xl:gap-0 justify-between'>
                                    <a className='flex group hover:scale-110' href="https://www.instagram.com/doncelle_hg/" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={instagramIcon} alt='instagramIcon' width={'30px'} height={'30px'} />
                                        <p className='hidden xl:flex mr-2 font-normal text-base secondary-color'>Instagram</p>
                                    </a>
                                    <a className='flex group hover:scale-110' href="https://api.whatsapp.com/send?phone=+573235228694&text=Hola Heidi, Estoy interesada me envias mas informacion por favor.." target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={whatsappIcon} alt='whatsappIcon' width={'30px'} height={'30px'} />
                                        <p className='hidden xl:flex mr-2 font-normal text-base secondary-color'>WhatsApp</p>
                                    </a>
                                    <a className='flex group hover:scale-110' href="https://www.facebook.com/profile.php?id=100092487846948" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={facebookIcon} alt='facebookIcon' width={'30px'} height={'30px'} />
                                        <p className='hidden xl:flex mr-2 font-normal text-base secondary-color'>Facebook</p>
                                    </a>
                                </figure>
                            </div>
                            <p className=' font-extralight mx-1 text-justify'>Doncelle_hg tiene el gusto de ofrecerte servicios de manicura en diferentes tecnicas como Semipermanente, Sof gel, press on tanto para manos y pies. Tambien ofrecemos servicios de diseño, depilacion y sombreado de cejas en henna, asi como tambien servicios extencion de pestañas pelo a pelo y lifting de pestañas. te invitamos a seguir nuestas paginas y agendar tu cita.</p>
                        </div>

                        <div className='flex flex-col bg-marca items-center border-t-color py-2 px-2 sm:h-full rounded-lg'>
                            <p className='primary-color text-lg font-medium'>blooming_cyp</p>
                            <p className='primary-color text-sm font-medium'> Extensiones de pestañas | Cejas | Uñas</p>
                            <p className='primary-color text-xs font-medium'> santiago de compostela España</p>
                            <div className='flex flex-row mt-2 mb-2'>
                                <figure className='flex gap-3 xl:gap-0 justify-between'>
                                    <a className='flex group hover:scale-110' href="https://www.instagram.com/blooming_cyp/" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={instagramIcon} alt='instagramIcon' width={'30px'} height={'30px'} />
                                        <p className='hidden xl:flex mr-2 font-normal text-base secondary-color'>Instagram</p>
                                    </a>
                                    <a className='flex group hover:scale-110' href="https://api.whatsapp.com/send?phone=+34666276262&text=Hola Heylen, Estoy interesada, me envias mas informacion por favor.." target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={whatsappIcon} alt='whatsappIcon' width={'30px'} height={'30px'} />
                                        <p className='hidden xl:flex mr-2 font-normal text-base secondary-color'>WhatsApp</p>
                                    </a>
                                    <a className='flex group hover:scale-110' href="https://www.facebook.com/profile.php?id=61554519061485" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={facebookIcon} alt='facebookIcon' width={'30px'} height={'30px'} />
                                        <p className='hidden xl:flex mr-2 font-normal text-base secondary-color'>Facebook</p>
                                    </a>
                                </figure>
                            </div>
                            <p className='font-extralight mx-1 sm:mx-8 text-justify'>blooming_cyp, ✨ Te ofrezco el arte que te hace sonreír con los ojos ✨ implementando diferentes tecnica de extencion de pestañas como tambien diseño, depilacion y sombreado de cejas en henna. Tambien contamos con servicios de manicura y pedicura para embellecer tus uñas con los diseños que mas te gusten. te invito a seguir mis redes, y si vives en Santiago de Compostela - España, no dudes en escribirme y agendar tu cita.</p>
                        </div>


                       
                    </div>
                </section>
            
           
        </section>
    )
}

export default ContactMe