import React from 'react';

function Navbar({ data }) {
  const favoriteCount = data.filter(item => item.isadded).length;

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <div className="text-3xl font-extrabold text-orange-500 tracking-wide">
          Orange<span className="text-gray-800">Music</span>
        </div>
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-2 px-5 py-2 bg-orange-500 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-lg font-semibold text-white">Favourites</h1>
            <span className="bg-white text-orange-500 text-sm font-bold px-3 py-1 rounded-full">
              {favoriteCount}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
