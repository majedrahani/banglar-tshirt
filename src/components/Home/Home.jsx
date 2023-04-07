import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Tshirts/Tshirts';
import Cart from '../Cart/Cart';
import "./Home.css"

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleBuyCart = (tshirts)=>{
        console.log('cart added')
    } 
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tshirts.map(tshirt => <Tshirts
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleBuyCart={handleBuyCart}
                    ></Tshirts>)
                }
            </div>
            <div className='card-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;