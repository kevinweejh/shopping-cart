import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ cart }) => {
  const cartCount = cart.length;

  return (
    <>
      <div className="my-4 flex w-auto justify-around divide-x-2 border-white border-2 rounded-lg">
        <Link to="/" className="p-8 grow max-w-48 block text-center font-semibold text-white hover:bg-gray-600">
          Home
        </Link>
        <Link to="/shop" className="p-8 grow max-w-48 block text-center font-semibold text-white hover:bg-gray-600">
          Shop
        </Link>
        <Link to="/cart" className="p-8 grow max-w-48 block text-center font-semibold text-white hover:bg-gray-600">
          Cart ({cartCount})
        </Link>
      </div>
    </>
  );
};

NavBar.propTypes = {
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
};

export default NavBar;
