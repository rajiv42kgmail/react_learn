import React from 'react'
import Booksdata from '../Booksdata'

const Books = () => {
    return (
        <>
            <div><h1>Books Store</h1></div>
            {
            Booksdata.map((cval) => {    
                    return (
            <>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={cval.imgLink} className="img-fluid rounded-start" alt={cval.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{cval.title}</h5>
                                <p className="card-text">{cval.desc}</p>
                                <p className="card-text"><small className="text-muted">By {cval.author}</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </>


            )

            })
        }    

        </>

    )

}
export default Books