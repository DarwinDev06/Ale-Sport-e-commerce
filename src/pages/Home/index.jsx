import { useContext, useEffect,Suspense,lazy} from "react"
import { ShoppingCartContext } from "../../Context"
/* import Layout from "../../components/Layout" 
import Card from "../../components/Card"
import Footer from "../../components/Footer" */
import Loading from '../../components/Loading'
import logo from '../../assets/Logo.png'

const delayImport = (importFunc, delay) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(importFunc());
    }, delay);
  });
};


const Layout = lazy(()=>import("../../components/Layout" )) 
const Card = lazy(()=> import("../../components/Card")) 
const Footer = lazy(()=> import("../../components/Footer")) 

function Home(children) {
  
  

 const context = useContext(ShoppingCartContext)

/*   useEffect = ( () => {
    const data = products
    setItem(data)
    console.log(data)
  },[]) */

  

  const titleHome = () => {
    if (context.searchByCategory) {
      if (context.searchByCategory !== 'Accesorios') {
        return `${context.searchByCategory} exclusivas`
      } else {
        return 'Accesorios exclusivos'
      }
    }else {
      return 'Productos exclusivos'
    }
  }

  //carga de categorias cuando se busca por url
  useEffect(() => {
    if(children.filter) context.setSearchByCategory(children.filter)

  },[children.filter,context])

  const RenderView = () => {


    if (context.filteredItems?.length > 0){
      return (
        context.filteredItems?.map((item) => (
          <Card key={item.id} data={item}/>
        ))
      )
    } else {
      return (
        <div className=' col-start-2 justify-center items-center w-full primary-color '>
          <h1>El producto  <strong>{`"${context.searchByTitle}"`}</strong>  no fue encontrado </h1>
          <figure>
            <img src='' alt='' />
            <img src={logo} alt='logo' />
          </figure>
        </div>
      )
    }

  }

  return (
    <>
    <Suspense fallback={<Loading/>}>
           <Layout >
        
        <div className='flex justify-center items-center w-80 py-3 snap-normal '>
            <h1 className='font-semibold text-xl secondary-color'>{titleHome()}</h1>
        </div>
        <input type='text ' placeholder='Buscar Producto' 
            className=' place-holder-color w-56 sm:w-72 md:w-96 h-8 leading-8 rounded-lg border-t-color secondary-color font-medium  mb-4 px-2 py-1 focus: outline-none ' 
            onChange={(event) => context.setSearchByTitle(event.target.value)}
            value={context.searchByTitle ? context.searchByTitle : ''}
          />
        <div className='grid md:justify-between justify-items-center  gap-12 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg '>
            {RenderView()}
        </div>
      </Layout>

      <Footer />
      </Suspense>
 
    </>

  )
}

export default Home