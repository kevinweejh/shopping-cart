import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductLineItem from './ProductLineItem';

const Cart = () => {
  const { cart } = useOutletContext();
  // cart array reduced to obtain cart total, returns initial value 0 if cart empty
  const total = cart.reduce((sum, currentValue) => sum + currentValue.price * currentValue.quantity, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className="font-semibold my-2 text-white text-3xl">Cart</h1>
      <div className="flex flex-col my-2 w-screen md:w-2/3">
        {cart.length === 0 ? (
          <h2 className="text-white text-center font-thin">Your cart is empty, dear.</h2>
        ) : (
          <h2 className="text-white text-center font-thin">
            Total: {Math.round((total + Number.EPSILON) * 100) / 100}
          </h2>
        )}
        {cart.length !== 0 &&
          cart.map((cartItem) => {
            return <ProductLineItem key={cartItem.id} cartItem={cartItem} />;
          })}
        {cart.length !== 0 && (
          <div className="flex w-full p-2 justify-end">
            <button
              className="text-white font-semibold text-center w-1/4 p-2 border-white border rounded-md hover:bg-gray-600"
              type="submit"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      category: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      quantity: PropTypes.number,
    }),
  ),
  setCart: PropTypes.func,
};

export default Cart;
