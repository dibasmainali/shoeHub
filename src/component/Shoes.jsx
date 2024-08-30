import React from "react";

const Shoes = ({ shoeData, onClick }) => {
  return (
    <div
      className="shoe-card cursor-pointer p-4 border rounded-lg shadow-md"
      onClick={onClick}
    >
      <img src={shoeData.image} alt={shoeData.name} className="w-full h-48 object-cover" />
      <h2 className="mt-2 text-xl font-bold">{shoeData.name}</h2>
      <p className="text-gray-600">${shoeData.price}</p>
    </div>
  );
};

export default Shoes;
