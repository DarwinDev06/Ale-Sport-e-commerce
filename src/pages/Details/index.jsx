/* import Layout from '../../components/Layout'
import ProductDetail from '../../components/ProductDetail'
import Footer from '../../components/Footer' */
import Loading from '../../components/Loading'
import { Suspense,lazy } from "react"

const Layout = lazy(()=>import("../../components/Layout" )) 
const ProductDetail = lazy(()=> import("../../components/ProductDetail")) 
const Footer = lazy(()=> import("../../components/Footer")) 



function Details() {
    return (
      <>
      <Suspense fallback={<Loading/>}>
        <Layout>
          <ProductDetail/>
        </Layout>
      
        <Footer/>
      </Suspense>
      </>
      
    )
  }

  export default Details