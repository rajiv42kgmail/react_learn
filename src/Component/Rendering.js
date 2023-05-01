import React from 'react';
import Home from './Home';
import AboutUs from './AboutUs';

const Rendering = () => {
    const name = 'rajeev';
    const pwd = 'raj482';
    const getName = window.prompt("Enter Name");
    const getPwd = window.prompt("Enter Password");
    if(name == getName && getPwd == pwd) {
        return (
            <><h1>Login successfull</h1>
              <AboutUs/>
            </>
        )
    } else {
        <h1>login failed</h1>
    } 


    return (
        <h1>This is login page</h1>


    )    
        
}
export default Rendering;
