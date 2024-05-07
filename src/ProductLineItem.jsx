import PropTypes from 'prop-types';
import { memo } from 'react';
import ProductImage from './components/ProductImage';
import ProductName from './components/ProductName';
import ProductPrice from './components/ProductPrice';
import DeleteButton from './components/DeleteButton';

const ProductLineItem = memo(({ cartItem }) => {
  return (
    <>
      <div className="grid grid-cols-4 m-2 p-2 rounded-lg bg-white">
        <ProductImage imageUrl={cartItem.image} cartPage={true} />
        <form className="col-span-3 flex flex-col rounded-lg ml-2 p-2 bg-gray-700">
          <ProductName name={cartItem.title} cartPage={true} />
          <div className="grid grid-cols-4 mt-2">
            <div className="col-span-3">
              <span className="text-white">
                <ProductPrice price={cartItem.price} /> x {cartItem.quantity}
              </span>
            </div>
            <DeleteButton cartItemForDeletion={cartItem} />
          </div>
        </form>
      </div>
    </>
  );
});
ProductLineItem.displayName = 'ProductLineItem';

ProductLineItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

export default ProductLineItem;
