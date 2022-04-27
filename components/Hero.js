import React from 'react';
const image = new URL('../public/images/hero.png', import.meta.url)

const Hero = () => {
    return (
        <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
            {/* left section */}
            <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
                <div>
                    
                </div>
                <h1 className='ax-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
                    Welcome to our StartUp
                </h1>
                <div className='flex justify-center lg:justify-between'>
                <p className='max-w-md text-center md:text-left'>
                Something in the body
                </p>
                </div>
                <div className='flex justify-center md:justify-start'>
                    <a href="#" className='p-3 px-6 pt-2 text-white bg-blue-600 rounded-full baseline hover:bg-blue-400'>Join us</a>
                </div>
            </div>

            {/* right section */}
            <div className='md:w-1/2 hidden md:flex max-w-lg flex justify-center'>
                <img src={image} />
            </div>
        </div>
    );
};

export default Hero;