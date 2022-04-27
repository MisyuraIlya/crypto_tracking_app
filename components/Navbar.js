import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaPiedPiperPp } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className='relative container mx-auto p-6'>
            <div className='flex justify-between items-center '>
                
                <div className='flex  space-x-20'> 
                <FaPiedPiperPp size='3rem'/>
                
                <div className='hidden md:flex space-x-12 items-center'>
                    <AnchorLink className='text-lg  hover:text-blue-400 cursor-pointer' href='#transaction'>Transaction table</AnchorLink>
                    <AnchorLink className='text-lg  hover:text-blue-400 cursor-pointer' href='#product'>Product</AnchorLink>
                    <AnchorLink className='text-lg  hover:text-blue-400 cursor-pointer' href='#team'>Team</AnchorLink>
                </div>
                </div>

                <div className='flex space-x-12'>
                    <div className="flex flex-col justify-center">
                        <div className='flex  space-x-10 justify-center'>
                        <a href='#'><BsGithub size='2rem'/></a>
                        </div>
                    </div>
                    <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'>
                        {darkTheme ? 'Light' : 'Dark'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;