import React from 'react';
import { useState } from 'react';

const Services = (props) => {
    const [firstName,setFirstName] = useState()
    const [fname,setFName] = useState()

    const handleForm = (e) => {
            e.preventDefault();
            setFName(firstName)
    }

    return (
        <>
            <div><h1>Our Services</h1></div>
            <h3>Logged In user: {props.loggedInUser}</h3>

            <form className='text-center' onSubmit={handleForm}>
                    <input type="text" placeholder='FirstName' id='firstname' onChange={(e) => setFirstName(e.target.value)}/>
                    <input type='submit'/>
            </form>
            <h3>{fname}</h3>
        </>

    )
}
export default Services