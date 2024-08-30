import React, { useState, useEffect } from "react";
import Shoes from "./component/Shoes.jsx";
import SearchBar from "./component/SearchBar.jsx";
import ShoeDetailsDialog from "./component/ShoeDetailsDialog.jsx";
import Footer from "./component/Footer.jsx";
import LoginPage from "./component/LoginPage";
import "./index.css";

function App() {
  const [shoes] = useState([
    { id: 1, name: "Nike", price: 100, image: "https://i5.walmartimages.com/asr/5b5b8312-ba8a-4cf0-96d4-37f55c68ef36.d30ec5dc0249506d32b663b6c24a069d.jpeg" },
    { id: 2, name: "Adidas", price: 150, image:"https://cdn.media.amplience.net/i/scvl/157156_342190_1?fmt=auto&w=640" },
    { id: 3, name: "Puma", price: 120, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8pV5unVjWx_ig9lPSS8YFbOqAnTlKzUQVPw&s" },
    { id: 4, name: "Reebok", price: 90, image:"https://startfitness.co.uk/cdn/shop/files/Reebok-Nano-X4-100074186.jpg?v=1706631672" },
    { id: 5, name: "Skechers", price: 80, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfZ-JCsUnZ3lqs6oKdlwswmMpSEzRQbf6cw&s" }
  ]);

  const [selectedShoe, setSelectedShoe] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);

  const onClick = (shoe) => {
    setSelectedShoe(shoe);
  };

  const closeBox = () => {
    setSelectedShoe(null);
  };

  const searchShoes = shoes.filter(shoe =>
    shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogin = () => {
    localStorage.setItem('loggedIn', 'true');
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
  };

  return (
    <div>
      {!loggedIn ? (
        <LoginPage loginDetails={handleLogin} />
      ) : (
        <>
          <button
            onClick={handleLogout}
            className="fixed top-4 right-4 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
          <SearchBar setSearchQuery={setSearchQuery} />
          <div className="flex justify-center items-center flex-wrap p-11 mx-7 gap-10">
            {searchShoes.length > 0 ? (
              searchShoes.map((shoe) => (
                <Shoes key={shoe.id} shoeData={shoe} onClick={() => onClick(shoe)} />
              ))
            ) : (
              <p>No shoes found</p>
            )}
          </div>
          <Footer />
          {selectedShoe && (
            <ShoeDetailsDialog shoe={selectedShoe} onClose={closeBox} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
