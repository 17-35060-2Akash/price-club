import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-6 pt-10'>
            <div>
                <h3>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-white'>/month</span></h3>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            <div>
                {
                    features.map((feature, idx) => <Feature feature={feature}
                        key={idx}></Feature>)
                }
                <button className='bg-blue-500 w-full mt-4 rounded py-4 font-bold text-white'>Buy Now</button>
            </div>
        </div>
    );
};

export default PriceOption;