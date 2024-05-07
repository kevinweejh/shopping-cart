import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';

const DeleteButton = ({ cartItemForDeletion }) => {
  const { cart, setCart } = useOutletContext();
  const handleDeletion = (e) => {
    e.preventDefault();

    const updatedCart = cart.filter((cartItem) => cartItem.id !== cartItemForDeletion.id);
    setCart(updatedCart);
  };

  return (
    <button
      className="text-white font-semibold text-center w-full border-white border rounded-md hover:bg-gray-600"
      type="submit"
      onClick={handleDeletion}
    >
      Delete
    </button>
  );
};

DeleteButton.propTypes = {
  cartItemForDeletion: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    quantity: PropTypes.number,
  }),
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

export default DeleteButton;
