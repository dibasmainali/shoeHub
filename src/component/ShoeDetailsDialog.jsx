import React from "react";

const ShoeDetails = ({ shoe, onClose }) => {


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">{shoe.name} </h2>

          <h2 className=" text-3xl hover:cursor-pointer hover:scale-125" onClick={onClose}>
            X
          </h2>
        </div>
        <img
          src={shoe.image}
          alt={shoe.name}
          className="w-full h-48 object-cover mb-4"
        />
        <p className="text-lg font-semibold">Price: ${shoe.price}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ShoeDetails;
