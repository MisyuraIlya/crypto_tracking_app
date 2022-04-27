import React from 'react';

const Table = ({buttonShow, update,hash}) => {

    return (
    <div className='relative container mx-auto p-6'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Method
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Time
                        </th>
                        <th scope="col" class="px-6 py-3">
                            From
                        </th>
                        <th scope="col" class="px-6 py-3">
                            To
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Amount
                        </th>
                    </tr>
                </thead>
                {hash.map((i) => 
                <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Transfer</span>
                    </th>
                    <td class="px-6 py-4">
                        {i.time}
                    </td>
                    <td class="px-6 py-4">
                        {i.from}
                    </td>
                    <td class="px-6 py-4">
                        {i.to}
                    </td>
                    <td class="px-6 py-4 text-right">
                        {i.amount}
                    </td>
                </tr>
            </tbody>            
                )}
            </table>
        </div>

        <div className='mt-10 ml-10'>
            <button 
            onClick={() => update()} 
            type="button" 
            className={(buttonShow) 
            ? "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            : "hidden text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}
            >Get more transactions</button>
        </div>
    </div>

    );
};

export default Table;