
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Productdeatils = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div className='text-center'> Product Loading...</div>;
  }

  return (
    <div className='bg-gray-100  p-5 rounded'>
      <div>
        <h1 className='bold text-center my-4 text-5xl'>Product Detail </h1>
      </div>
      <div className='m-4'>
      <img src={product.image} alt={product.title} className="w-1/4 h-48 object-contain mb-4" />
      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-700 mb-2 bold">${product.price}</p>
      </div>
      
     
     
    </div>
  );
};

export default Productdeatils;
