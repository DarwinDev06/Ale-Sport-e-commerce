import PropTypes from 'prop-types'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'

const Layout = ({children}) => {

    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    }

    const context = useContext(ShoppingCartContext)
      
    const handleTouch = () => {
        
        context.setIsMenuActive(false)

    }

    return (
        <div className='flex flex-col items-center mt-20 bg-body mx-2 sm:mx-10 md:mx-14 lg:mx-16 xl:mx-24 rounded-xl  max-h-max py-3'
            onTouchStart={handleTouch}>
             {children}
        </div>
    )

    
}

export default Layout