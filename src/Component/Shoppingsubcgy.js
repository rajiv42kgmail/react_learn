import React from 'react'
import Shopdata from '../Shopdata'

const Shoppingsubcgy = (props) => {
    var getVal = 0;

    return (
   
    Shopdata.map((cval) => {  

        if(props.cgy === cval.category) {

            getVal += parseInt(cval.cost)
                    props.setgetTotal(getVal);
            
            return (    
                <>
                    {cval.item}  {cval.cost}

                 <br/>
                    
                </>
            )
        }

    })   
    )


}
export default Shoppingsubcgy