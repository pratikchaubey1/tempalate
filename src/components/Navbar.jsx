import React from 'react';
import { useForm } from 'react-hook-form';

function Navbar() {
  const { register, handleSubmit } = useForm();

  const onSearch = (data) => {
    console.log('Search Query:', data.search);
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      
      <div className="text-2xl font-bold">MySite</div>

     
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About Us</a></li>
      </ul>

      
      <div className="flex items-center space-x-4">
        
        <form onSubmit={handleSubmit(onSearch)} className="flex">
          <input
            {...register('search')}
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-l-md text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 px-3 py-1 rounded-r-md hover:bg-blue-700"
          >
            Go
          </button>
        </form>

       
        <button className="bg-green-600 px-3 py-1 rounded hover:bg-green-700">Login</button>
        <button className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600">Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;
