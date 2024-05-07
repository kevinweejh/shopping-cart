import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';

// TODO: Receive props for Quantity and Product from Product Card, Product is received from Shop.
const AddToCartButton = ({ productData, selectedQuantity, setSelectedQuantity }) => {
  const { cart, setCart } = useOutletContext();
  const addToCart = (e) => {
    // TODO: On press, update cart state variable with Product and Quantity data, reset Quantity to 1
    e.preventDefault();

    // Button does nothing if item quantity is 0
    if (selectedQuantity > 0) {
      const updatedCart = [...cart];
      for (let cartItem of updatedCart) {
        // Accumulate quantity if item already in cart
        if (cartItem.id === productData.id) {
          cartItem.quantity += selectedQuantity;
          setCart(updatedCart);
          setSelectedQuantity(0);
          return;
        }
      }
      // Append to cart if item not yet in cart
      setCart([...cart, { ...productData, quantity: selectedQuantity }]);
      setSelectedQuantity(0);
      return;
    }
    return;
  };
  return (
    <div className="block relative">
      <button
        className="text-white font-semibold text-center w-full border-white border rounded-md hover:bg-gray-600"
        type="submit"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

// TODO: Load state for Add to Cart button, temp disable.

AddToCartButton.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
  selectedQuantity: PropTypes.number,
  setSelectedQuantity: PropTypes.func,
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

export default AddToCartButton;
