import React from 'react';
import Services from './Services';

const Home = () => {
    const loggedInUser='Rajeev'; 
    return (
        <>
            <div><h1>Welcome {loggedInUser}!!!</h1></div>
            <Services loggedInUser={loggedInUser} />
        </>

    )
}
export default Home 