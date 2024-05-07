import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  // TODO: Generate products onLoad, pass it down as Props to Shop, and Cart
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDataAll, setProductDataAll] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((data) => {
        setProductDataAll(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-screen min-h-screen relative bg-gray-700">
        <NavBar cart={cart} />
        <Outlet context={{ loading, productDataAll, cart, setCart }} />
      </div>
    </>
  );
}

export default App;
