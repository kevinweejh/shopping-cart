import PropTypes from 'prop-types';
import { memo } from 'react';

const ProductPrice = memo(({ price }) => {
  return <h2 className="text-white font-thin">${price}</h2>;
});
ProductPrice.displayName = 'ProductPrice';

ProductPrice.propTypes = {
  price: PropTypes.number,
};

export default ProductPrice;
