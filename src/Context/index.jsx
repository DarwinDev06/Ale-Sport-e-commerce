import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import products from "../database/products/productos";

export const ShoppingCartContext = createContext()


export const ShoppingCartProvider = ( { children } ) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    const [count, setCount] = useState(0)

    // state show product detail
    const [productDetail, setProductDetail] = useState({})

    // show products
    const [items,setItems] = useState(products)
    const [filteredItems, setFilteredItems] = useState(null)

    // searchByTitle
    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log('seacrh', searchByTitle)

    const [searchByCategory, setSearchByCategory] = useState(null)

    const filterByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes( searchByTitle.toLowerCase()))
    }

    const filterByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.includes(searchByCategory))
    }

    const filterBy = (searchType,items,searchByTitle,searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filterByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filterByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filterByCategory(items, searchByCategory).filter(item =>item.title.toLowerCase().includes( searchByTitle.toLowerCase()))
        }

        if (!searchType ) {
            return items
        }
    }

    useEffect(() => {
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items,searchByTitle,searchByCategory))
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY',items,searchByTitle,searchByCategory))
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchByTitle,searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items,searchByTitle,searchByCategory))

    },[items,searchByTitle,searchByCategory])

    // search by category   

    // limpiador
/*     useEffect (() => {
        if(searchByTitle == null) return setSearchByTitle(null)
        if(searchByCategory == null) return setSearchByCategory(null)
    },[searchByTitle,searchByCategory]) */



    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            productDetail,
            setProductDetail,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filterByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}