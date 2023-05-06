import React from 'react';
import { useRef } from 'react';

const FormRef = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    
    const handleForm = (e) => {
        e.preventDefault();
        const name=nameRef.current.value 
        const email=emailRef.current.value 
        console.log(name,email)
   }
  
    return (
        <>
            <div><h1>Form Ref</h1></div>
            <form className='text-center' onSubmit={handleForm}>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName' name='fname' ref={nameRef} /><br/>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' name='email' ref={emailRef}/><br/>
                    <button>Submit</button>
            </form>
        </>

    )
}
export default FormRef