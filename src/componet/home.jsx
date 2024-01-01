import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <h1 className='bold text-center text-5xl'>Discover NEW Arrivals</h1>
        <h1 className='bold text-center text-sm my-4'>Recently added</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <div className="bg-white p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-700 mb-2">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
      </section>
    </div>
  );
};

export default Home;
