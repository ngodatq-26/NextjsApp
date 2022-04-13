import React from 'react';
import clientPromise from '../api-lib/database';
import headerComponent from '../modules/common/components/headerComponent';
const Home = () =>{
    clientPromise()
    return (
        <headerComponent />
    )
}

export default Home;

