import React from 'react';
import "./Tshirts.css"

const Tshirts = ({tshirt,handleBuyCart}) => {
    const{_id, gender, name, picture, price}= tshirt;
    return (
        <div className='T-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price : ${price}</p>
            <button 
            className='btn-buy'
            onClick={handleBuyCart}
            >Buy Now</button>
        </div>
    );
};

export default Tshirts;