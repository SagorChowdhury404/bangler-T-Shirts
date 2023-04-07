import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import TshirtsCard from '../shirtsCard/TshirtsCard';
const Home = () => {
    const tShirts = useLoaderData();
    return (
        <div className='T-shirtsCardsComponents'>
            {
                tShirts.map(tShirt => <TshirtsCard
                    key={tShirt._id}
                    tShirt={tShirt}
                ></TshirtsCard>)
            }


        </div>
    );
};

export default Home;
