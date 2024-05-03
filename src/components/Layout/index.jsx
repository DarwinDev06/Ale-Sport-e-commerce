import PropTypes from 'prop-types'

const Layout = ({children}) => {

    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    }
      

    return (
        <div className='flex flex-col items-center mt-20 bg-body mr-24 ml-24 rounded-xl max-h-max py-3'>
             {children}
        </div>
    )

    
}

export default Layout