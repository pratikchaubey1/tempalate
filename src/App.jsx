import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const url = "https://fakestoreapi.com/products/";
  const [Card, setCard] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Server ka data: ", data);
        setProducts(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

 

  return (
    <div>
      <Navbar></Navbar>
      <Card></Card>
    </div>
  );
}

export default App;
