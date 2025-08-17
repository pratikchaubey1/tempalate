import React from 'react';
<<<<<<< HEAD

function Navbar({ peeps }) {
  const favoriteCount = peeps.filter(item => item.isinvited).length;

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <div className="text-3xl font-extrabold text-black tracking-wide hover:scale-105 transition-transform duration-300">
          LR<span className="text-yellow-300">/Trusted</span>
        </div>
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-lg font-semibold text-purple-700">Trusted</h1>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
              {favoriteCount}
            </span>
          </div>
        </div>
      </nav>
    </header>
=======
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
>>>>>>> 962aab11080053022f1034f702249c1adaae55b5
  );
}

export default Navbar;
<<<<<<< HEAD

=======
>>>>>>> 962aab11080053022f1034f702249c1adaae55b5
