import React from 'react'
import Searchbar from './Searchbar'
import Ptable from './Ptable'
const ProductsApp = ({products}) => {
  return (
    <div>
        <Searchbar/>
        <Ptable products={products} />
    </div>    
  )
}

export default ProductsApp