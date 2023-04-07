import React from 'react';
import './TshirtCard.css'
const TshirtsCard = ({ tShirt }) => {
    console.log(tShirt)
    const { picture, index, price, name, gender } = tShirt;
    return (
        <div className='T-shirtCard' >
            <img src={picture} alt="" />
            <h2>Index:{index}</h2>
            <h2>Name:{name}</h2>
            <h2>Price:{price}</h2>
            <h2>Gender:{gender}</h2>

        </div>
    );
};

export default TshirtsCard;