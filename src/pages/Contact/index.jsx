/* import Layout from "../../components/Layout"
import ContactMe from '../../components/Contact'
import Footer from "../../components/Footer" */
import Loading from '../../components/Loading'
import { Suspense, lazy } from "react"

const Layout = lazy(()=>import("../../components/Layout" )) 
const ContactMe = lazy(()=> import("../../components/Contact")) 
const Footer = lazy(()=> import("../../components/Footer")) 



function Contact() {
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <Layout>
        <ContactMe />
      </Layout>
      <Footer/>
    </Suspense>
    </>
  )
}

export default Contact