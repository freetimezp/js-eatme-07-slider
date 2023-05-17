import React from 'react';
import { FiLock } from 'react-icons/fi';

const Header = () => {
    return (
        <div className='container mx-auto pt-5 z-50 relative'>
            <div className='flex justify-between'>
                <p className='text-2xl font-bold duration-400 hover:scale-110 ease-in-out'>Food Hunt</p>
                <div className='flex w-96 gap-10 text-xl'>
                    {['Breakfest', 'Lunch', 'Dinner'].map((item, i) => (
                        <p key={i} className='cursor-pointer duration-500 hover:-rotate-6 ease-in-out'>
                            {item}
                        </p>
                    ))}
                </div>
                <FiLock className='text-3xl cursor-pointer opacity-70 hover:opacity-100 ease-in-out hover:drop-shadow-md' />
            </div>
        </div>
    );
};

export default Header;