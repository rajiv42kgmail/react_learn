import React from 'react'
import PCategories from './PCategories';
import Prow from './Prow';

const Ptable = ({products}) => {
    const rows = [];
   // alert(products);
    let lastcategory = null;
    products.forEach((product) => {
        if(product.category !== lastcategory) {
            rows.push(
               <PCategories category={product.category} key={product.category} /> 
            )
        }
        rows.push(
            <Prow product={product} key={product.name} /> 
         )
         lastcategory = product.category    
    })

  return (
        <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>

        </table>

  )
}

export default Ptable