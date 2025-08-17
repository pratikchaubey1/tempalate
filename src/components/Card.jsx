import React from "react";

function Card({ peeps, handleClick }) {
  return (
    <div
      className="min-h-screen bg-white flex flex-wrap items-center justify-center gap-8 px-6 py-10"
    >
      {peeps.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-md p-6 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105"
        >
          <div className="flex gap-4 items-start">
            {/* Profile Image */}
            <img
              className="w-28 h-28 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110"
              src={item.IMAGE}
              alt={item.NAME}
            />

            {/* Info Section */}
            <div className="flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-indigo-700 mb-2">
                {item.NAME}
              </h2>

              <p className="text-gray-700 font-medium text-lg">
                Age: <span className="text-pink-600">{item.Age}</span>
              </p>

              <p className="text-gray-700 font-medium text-lg">
                Gender: <span className="text-blue-600">{item.GENDER}</span>
              </p>

              <p className="text-gray-600 text-base mt-1">
                Address:{" "}
                <span className="text-gray-900 font-semibold">
                  {item.ADDRESS}
                </span>
              </p>

              {/* Button */}
              <button
                onClick={() => handleClick(item.id)}
                className={`mt-4 w-full py-3 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 ${
                  item.isinvited
                    ? "bg-emerald-500 hover:bg-emerald-600"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {item.isinvited ? "Invited" : "Invite"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
