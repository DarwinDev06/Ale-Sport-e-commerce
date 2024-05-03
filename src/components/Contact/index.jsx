
import whatsappIcon from '../../assets/whatsapp.png'
import instagramIcon from '../../assets/instagram.png'
import facebookIcon from '../../assets/facebook.png'
import tiktokIcon from '../../assets/tik-tok.png'
import mediosPagos from '../../assets/mediosdepago.png'


const nosotros = `Ale Sport, tu destino para la moda deportiva más trendy en Ibagué y más allá! En nuestra tienda virtual, encontrarás una amplia gama de prendas de vestir y accesorios que combinan estilo, comodidad y calidad.

¿Qué nos hace destacar? Nuestra selección cuidadosa de ropa deportiva en tendencia, lo mejor de todo es que garantizamos la disponibilidad inmediata de muchas de nuestras prendas, listas para ser enviadas a cualquier parte del país. Además, si no encuentras lo que buscas en nuestra tienda, no te preocupes. Aceptamos pedidos por encargo, asegurando que obtengas exactamente lo que deseas.

En Ale Sport, la calidad es nuestra promesa. Cada artículo que ofrecemos está respaldado por nuestro compromiso con productos duraderos y de alto rendimiento. 

¡Explora nuestra tienda virtual hoy mismo y descubre cómo Ale Sport puede elevar tu estilo deportivo al siguiente nivel!💖🔥🤌🆒`

const mision = `En Ale Sport, nos comprometemos a proporcionar a nuestros clientes la mejor experiencia en la compra de ropa deportiva de alta calidad. Nuestra misión es inspirar y apoyar a las personas en su búsqueda de un estilo de vida activo y saludable, ofreciendo productos que combinen funcionalidad, comodidad y estilo.`

const vision = `En Ale Sport, aspiramos a ser el destino preferido para todos los entusiastas del deporte y el fitness, ofreciendo una experiencia de compra única que inspire, motive y empodere a nuestros clientes para alcanzar sus metas atléticas y adoptar un estilo de vida activo y saludable.`





const ContactMe = () => {
    return (
        <section className='flex flex-col justify-center items-center py-3'>
            <h1 className='primary-color font-bold text-2xl'>Nosotros</h1>
            <p className=' whitespace-break-spaces px-8 text-lg font-extralight mt-1 text-justify'>
                {nosotros}
            </p>
            <div className=' grid grid-cols-2 justify-between items-center gap-16 mt-8 px-8'>
                <p className='flex flex-col items-center border border-t-color px-3 py-2 rounded-lg box-border bg-q-color'>
                    <span className=' font-semibold text-xl secondary-color border-b-2  px-3'>Mision</span>
                    <span className=' font-extralight text-justify italic'>{mision}</span>
                </p>
                <p className='flex flex-col items-center border border-t-color px-3 py-2 rounded-lg box-border bg-q-color'>
                    <span className=' font-semibold text-xl secondary-color border-b-2  px-3'>Vision</span>
                    <span className=' font-extralight text-justify italic'>{vision}</span>
                </p>
            </div> 

            <div className='flex flex-col justify-center w-full mt-3'>
              {/* izquierda */}
                <div className=' flex flex-col items-center w-full px-8 py-8 '>
{/*                     <div className=' flex flex-row'>
                        <button className=' w-20 h-10 text-lg bg-t-color primary-color btn-contact rounded-lg'>Mision</button>
                        <button className=' w-20 h-10 text-lg bg-t-color primary-color btn-contact rounded-lg'>Vision</button>
                    </div> */}
                    <h3 className='primary-color font-semibold text-2xl mb-2'>Contacto</h3>
                    <div className='flex flex-col  mx-40 px-16 '>
                        <p className='text-center font-light'>En Ale Sport, nos destacamos por nuestra amplia variedad de prendas, algunas disponibles para entrega inmediata y otras por encargo. Nuestro compromiso es ofrecerte productos de calidad y un servicio excepcional.</p>
                        <div className='grid grid-cols-2 gap-4 mt-4'> 
                            <div className='border-s-color rounded-lg py-2'>
                            <p className='text-center font-semibold text-lg secondary-color'>Ubicacion</p>
                                <ul className=' px-2 py-2 font-light'>
                                    <li className='flex '>📍 <p className='pl-3'>Estamos ubicados en Ibagué Tolima</p> </li>
                                    <li className='flex '>🛵 <p className='pl-1'>Domicilios contraentrega en Ibague Tolima</p></li>
                                    <li className='flex'>🚛 <p className='pl-1'>envios nacionales 100% seguros</p></li>
                                </ul>
                            </div>
                            <div className='border-s-color rounded-lg py-2'>
                                <p className='text-center font-semibold text-lg secondary-color'>Horarios de atencion 🕗</p>
                                <ul className='px-2 py-2 font-light'>
                                    <li className='flex'>📱 <p className='pl-1'> atencion por whatsapp de 8:00 a.m a 9:00 p.m todos los dias</p></li>
                                    <li className='flex'>🛵 <p className='pl-1'> envios contraentrega de 8:00 a.m a 8:00 p.m todos los dias</p></li>
                                    <li className='flex'>🚛 <p className='pl-1'> envios nacionales de 10:00 a.m a 4:00 p.m de lunes a sabado</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center my-5 mx-40 px-16'>
                        <p className=' font-semibold text-center text-xl'>Contantanos</p>
                        <div className='flex items-center justify-center mt-5 gap-3'>
                            <a className='flex flex-row group items-center justify-center  mx-2 hover:scale-110' href="https://www.whatsapp.com/?lang=es" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img className=' object-fill ' src={whatsappIcon} alt='whatsappIcon' width={'30px'} height={'30px'} />
                                </figure>
                                <p className=' ml-2 group-hover:font-semibold'>+57 3052551897 </p>
                            </a>
                        
                            <a className='flex flex-row group items-center justify-center  mx-2 hover:scale-110' href="https://www.instagram.com/ale.sport.t" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img  className=' object-fill' src={instagramIcon} alt='instagramIcon' width={'30px'} height={'30px'} />
                                </figure>
                                <p className=' ml-2 group-hover:font-semibold'>ale.sport.t</p>
                            </a>
                        
                            <a className='flex flex-row group items-center   mx-2 hover:scale-110' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img className=' object-fill'  src={facebookIcon} alt='facebookIcon' width={'30px'} height={'30px'} />
                                </figure>
                                <p className=' ml-2 group-hover:font-semibold'>amarstoreco6</p>
                            </a>
        
                            <a className='flex flex-row items-center justify-center box-content  mx-2 group hover:scale-110  ' href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                                <figure >
                                    <img  className=' object-fill' src={tiktokIcon} alt='tiktokIcon' width={'30px'} height={'30px'}/>
                                </figure>
                                <p className=' ml-2 group-hover:font-semibold'>Ticktock</p>
                            </a>
                        </div>
                    </div>
                    <figure className='flex flex-col mt-4'>
                        <span className='text-center font-semibold'>Información medios de pago</span>
                       {/*  <h3>Medios de pago</h3> */}
                        <img className='border object-cover mb-2 mt-2 rounded-lg' src={mediosPagos} alt="medios de pagos" width={'300px'} height={'400px'}/>
                    </figure>

                </div>
                {/* derecha */}
                <div className='flex flex-col  items-center justify-center w-full px-8 py-8'>
                    <h3 className='primary-color font-semibold text-2xl mb-2'> Marcas recomendadas</h3>
                    <div className='grid grid-cols-2 gap-3 justify-center items-center'>

                        <div className='flex flex-col bg-marca items-center border-t-color py-2 px-2 h-80 rounded-lg'>
                            <h3 className='primary-color text-lg font-medium'> Juana Store</h3>
                            <h4 className='primary-color text-sm font-medium'> Accesorios</h4>
                            <h5 className='primary-color text-xs font-medium'> Ibagué Tolima</h5>
                            <div className='flex flex-row mt-2 mb-2'>
                            <figure className='flex justify-between'>
                                <a className='flex ' href="https://www.instagram.com/juana_store08/" target="_blank" rel="noopener noreferrer">
                                    <img className='mx-1' src={instagramIcon} alt='instagramIcon' width={'30px'} height={'30px'} />
                                    <p className='mr-2 font-normal text-base secondary-color'>Instagram</p>
                                </a>
                                <a className='flex ' href="https://www.whatsapp.com/?lang=es" target="_blank" rel="noopener noreferrer">
                                    <img className='mx-1' src={whatsappIcon} alt='whatsappIcon' width={'30px'} height={'30px'} />
                                    <p className='mr-2 font-normal text-base secondary-color'>WhatsApp</p>
                                </a>
                                <a className='flex ' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <img className='mx-1' src={facebookIcon} alt='facebookIcon' width={'30px'} height={'30px'} />
                                    <p className='mr-2 font-normal text-base secondary-color'>Facebook</p>
                                </a>
                                </figure>
                            </div>
                            <p className=' font-extralight px-8 text-justify'>Accesorios para dama Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, quaerat dolorem suscipit, facere maxime voluptatem, quos sit voluptatum fugiat itaque blanditiis maiores recusandae ex. Temporibus, minima fugiat. Corrupti, ab impedit.</p>
                        </div>

                        <div className='flex flex-col bg-marca items-center border-t-color py-2 px-2 h-80 rounded-lg'>
                            <h3 className='primary-color text-lg font-medium'> Alejandra Quevedo</h3>
                            <h4 className='primary-color text-sm font-medium'> Cejas & pestañas</h4>
                            <h5 className='primary-color text-xs font-medium'> Ibagué Tolima</h5>
                            <div className='flex flex-row mt-2 mb-2'>
                                <figure className='flex justify-between'>
                                    <a className='flex ' href="https://www.instagram.com/juana_store08/" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={instagramIcon} alt='instagramIcon' width={'30px'} height={'30px'} />
                                        <p className='mr-2 font-normal text-base secondary-color'>Instagram</p>
                                    </a>
                                    <a className='flex ' href="https://www.whatsapp.com/?lang=es" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={whatsappIcon} alt='whatsappIcon' width={'30px'} height={'30px'} />
                                        <p className='mr-2 font-normal text-base secondary-color'>WhatsApp</p>
                                    </a>
                                    <a className='flex ' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={facebookIcon} alt='facebookIcon' width={'30px'} height={'30px'} />
                                        <p className='mr-2 font-normal text-base secondary-color'>Facebook</p>
                                    </a>
                                </figure>
                            </div>
                            <p className=' font-extralight px-8 text-justify'>cejas y pestañas para dama Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, quaerat dolorem suscipit, facere maxime voluptatem, quos sit voluptatum fugiat itaque blanditiis maiores recusandae ex. Temporibus, minima fugiat. Corrupti, ab impedit.</p>
                        </div>

                        <div className='flex flex-col bg-marca items-center border-t-color py-2 px-2 h-80 rounded-lg'>
                            <h3 className='primary-color text-lg font-medium'> Doncelle nails & lashes</h3>
                            <h4 className='primary-color text-sm font-medium'> By Heidy Gonzalez</h4>
                            <h5 className='primary-color text-xs font-medium'> Ibagué Tolima</h5>
                            <div className='flex flex-row mt-2 mb-2'>
                                <figure className='flex justify-between'>
                                    <a className='flex ' href="https://www.instagram.com/juana_store08/" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={instagramIcon} alt='instagramIcon' width={'30px'} height={'30px'} />
                                        <p className='mr-2 font-normal text-base secondary-color'>Instagram</p>
                                    </a>
                                    <a className='flex ' href="https://www.whatsapp.com/?lang=es" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={whatsappIcon} alt='whatsappIcon' width={'30px'} height={'30px'} />
                                        <p className='mr-2 font-normal text-base secondary-color'>WhatsApp</p>
                                    </a>
                                    <a className='flex ' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={facebookIcon} alt='facebookIcon' width={'30px'} height={'30px'} />
                                        <p className='mr-2 font-normal text-base secondary-color'>Facebook</p>
                                    </a>
                                </figure>
                            </div>
                            <p className=' font-extralight px-8 text-justify'>Cejas y pestañas Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, quaerat dolorem suscipit, facere maxime voluptatem, quos sit voluptatum fugiat itaque blanditiis maiores recusandae ex. Temporibus, minima fugiat.</p>
                        </div>

                        <div className='flex flex-col bg-marca items-center border-t-color py-2 px-2 h-80 rounded-lg'>
                            <h3 className='primary-color text-lg font-medium'> Blooming</h3>
                            <h4 className='primary-color text-sm font-medium'> Extensiones de pestañas | Cejas | Uñas</h4>
                            <h5 className='primary-color text-xs font-medium'> santiago de compostela España</h5>
                            <div className='flex flex-row mt-2 mb-2'>
                                <figure className='flex justify-between'>
                                    <a className='flex ' href="https://www.instagram.com/juana_store08/" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={instagramIcon} alt='instagramIcon' width={'30px'} height={'30px'} />
                                        <p className='mr-2 font-normal text-base secondary-color'>Instagram</p>
                                    </a>
                                    <a className='flex ' href="https://www.whatsapp.com/?lang=es" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={whatsappIcon} alt='whatsappIcon' width={'30px'} height={'30px'} />
                                        <p className='mr-2 font-normal text-base secondary-color'>WhatsApp</p>
                                    </a>
                                    <a className='flex ' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <img className='mx-1' src={facebookIcon} alt='facebookIcon' width={'30px'} height={'30px'} />
                                        <p className='mr-2 font-normal text-base secondary-color'>Facebook</p>
                                    </a>
                                </figure>
                            </div>
                            <p className='font-extralight px-8 text-justify'>Cejas y pestañas Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, quaerat dolorem suscipit, facere maxime voluptatem, quos sit voluptatum fugiat itaque blanditiis maiores recusandae ex. Temporibus, minima fugiat.</p>
                        </div>


                       
                    </div>
                </div>
            
            </div>
        </section>
    )
}

export default ContactMe