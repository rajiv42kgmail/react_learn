import React from 'react';
import { useState } from 'react';

const Services = () => {
    const [firstName,setFirstName] = useState()
    const [fname,setFName] = useState()

    const handleForm = (e) => {
            e.preventDefault();
            setFName(firstName)
    }

    return (
        <>
            <div><h1>Our Services</h1></div>
            <form className='text-center' onSubmit={handleForm}>
                    <input type="text" placeholder='FirstName' id='firstname' onChange={(e) => setFirstName(e.target.value)}/>
                    <input type='submit'/>
            </form>
            <h3>{fname}</h3>
        </>

    )
}
export default Services