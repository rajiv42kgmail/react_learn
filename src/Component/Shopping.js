import React from 'react'
import Shopcategory from '../Shopcategory'
import Shoppingsubcgy from './Shoppingsubcgy'
import { useState } from 'react'

const Shopping = () => {
    const [total,setgetTotal] = useState();
    return (
        <>
            <div><h1>Shopping Cart</h1></div>
            {
            Shopcategory.map((cval) => {    
                    return (
            <>      
               <b> {cval.category}                 Total: {total}        
 </b>
                <br />
                <Shoppingsubcgy cgy={cval.category} setgetTotal={setgetTotal} total={total} /> 
            </>


            )

            })
        }    

        </>

    )

}
export default Shopping