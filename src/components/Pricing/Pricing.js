import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'free', price: 0, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unneccessary Feature',
                'Will never use feature',
                'hudai feature',
                'azaira feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'Everything on free',
                'Extra Feature',
                'Unneccessary Feature',
                'Will never use feature',
                'hudai feature',
                'azaira feature'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'Everything on premium',
                'Extra Feature',
                'Unneccessary Feature',
                'Will never use feature',
                'hudai feature',
                'azaira feature'
            ]
        },
    ];
    return (
        <div className='pt-10'>
            <h2 className='text-5xl font-semibold bg-indigo-300 p-12 text-white mb-10'>Best Deal Of the town</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;