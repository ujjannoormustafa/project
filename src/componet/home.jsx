import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import { Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [Topproducts, setTopProducts] = useState([]);
  const displayedProducts = Topproducts.slice(0, 3);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const addToCart = (product) => {
    // Create a copy of the current cart and add the selected product
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <h1 className='bold text-center text-5xl'>Discover NEW Arrivals</h1>
        <h1 className='bold text-center text-sm my-4'>Recently added</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map(product => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className="bg-white p-4 rounded shadow">
                  <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-700 mb-2">${product.price}</p>
                </div>
              </Link>
              <Button onClick={() => addToCart(product)} className="mt-4" type="de">
                Add to Cart
              </Button>
            </div>
          ))}
    </div>
      </section>

      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
             
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Free shipping</h2>
          </div>

          <div class="flex-grow">
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
             
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Support 24/7</h2>
          </div>

          <div class="flex-grow">

            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
             
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">30 Return</h2>
          </div>
          <div class="flex-grow">

            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className='flex items-center justify-around w-full text-white my-8 rounded'>
  <div className='w-2/4 ml-2 max-h-56 bg-black flex flex-col items-center justify-center '>
    
    <h1 className='bold text-center    py-4 text-5xl'>Peace of mind</h1>

    <p className='text-center text-sm  px-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt vitae cumque non ut, consequuntur eum sapiente molestias repella
      t praesentium magni in reprehenderit impedit pariatur ipsam minus perferendis nobis aperiam ducimus?</p>

      <button className="inline-flex items-center my-12  text-white bg-blue-700 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">cart
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
  </div>
  <div className='w-1/3 max-h-56 bg-black flex flex-col items-center justify-center'>
 
  <h1 className='bold   text-center  py-4 text-5xl'>Buy 2 Get 1</h1>

  <p className='text-center text-sm px-8 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt vitae cumque non ut, consequuntur eum sapiente molestias repella
      t praesentium magni in reprehenderit impedit pariatur ipsam minus perferendis nobis aperiam ducimus?</p>

      <button className="inline-flex items-center my-8 text-white bg-blue-700 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">cart
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
  </div>
</div>

<h1 className='bold text-center    py-4 text-5xl'>Top selling Products</h1>
<div className='text-center text-sm mt-6'>
  Updating very soon 
</div>
<button onClick={showDrawer} className="inline-flex items-center my-12  text-white bg-blue-700 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Cart
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>


          <Drawer
        title="Shopping Cart"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        {/* Render the contents of the cart here */}
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.title} - ${item.price}</p>
            {/* Add more details if needed */}
          </div>
        ))}
      </Drawer>

  </div>
  );
};

export default Home;
