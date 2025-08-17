import React from 'react';

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
  );
}

export default Navbar;

