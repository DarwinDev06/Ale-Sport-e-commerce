import Layout from "../../components/Layout"
import Footer from '../../components/Footer'
import erro404 from '../../assets/error-404.jpg'

function NotFound() {
  return (
    <>
      <Layout>
        <section className='flex flex-col items-center w-full px-5 py-2'>
            <h2 className='primary-color font-bold italic text-3xl text-center'>Pagina no encontrada</h2>
            <figure className=' rounded-lg pt-4'>
              <img className='rounded-lg object-fill max-h-[480px]' src={erro404} alt='error 404' />
            </figure>
        </section>
      </Layout>
      <Footer/>
    </>
  )
}

export default NotFound