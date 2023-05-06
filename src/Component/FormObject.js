import React from 'react';
import { useState } from 'react';

const FormObject = () => {
    const handleChange = (e) => {
        e.preventDefault();
        setUser(prev => ({...prev,[e.target.name]:e.target.value}))
       // console.log(user)
    }
    const[user,setUser] = useState({
        fname:"",
        lname:"",
        email:""
    }) 
    const[final,setFinal] = useState({})
    const printData = (e) => {
        e.preventDefault();
        setFinal(user);
        console.log(final.fname)
    }
    return (
        <>
            <div><h1>Form Object</h1></div>
            <form className='text-center' onSubmit={printData}>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName' name='fname' onChange={handleChange}/><br/>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName' name='lname' onChange={handleChange}/><br/>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' name='email' onChange={handleChange}/><br/>
                    <button>Submit</button>
            </form>
            <h1>{final.fname}</h1>
        </>

    )
}
export default FormObject