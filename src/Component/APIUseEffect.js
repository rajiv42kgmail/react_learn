import React from 'react'
import { useEffect } from 'react'

const APIUseEffect = () => {

    useEffect(async ()  => {
        const url = 'https://fear-and-greed-index.p.rapidapi.com/v1/fgi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c28172200msh332504a5de5d014p1286d2jsne86124512918',
		'X-RapidAPI-Host': 'fear-and-greed-index.p.rapidapi.com'
	}
};

try {
	const response = await  fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    },[])
  return (
    <>
         <div>APIUseEffect</div>

    </>
  )
}

export default APIUseEffect