import React from 'react';

const Filter = ({sortedData, options, selectOption, setSelectOption}) => {



    return (
        <section id='transaction'>
        <div className='relative container mx-auto p-6 mt-8'>
            <h1 className='flex justify-center ax-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
                transaction Table
            </h1>
            <div className='w-1/12'>
                <h2>Choose amount</h2>
                <select
                    value={selectOption}
                    onChange={e => {setSelectOption(e.target.value); sortedData(e.target.value)}}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                    {options.map(o => (
                    <option key={o} value={o}>{o}</option>
                    ))}
                </select>
            </div>
        </div>
        </section>
    );
};

export default Filter;