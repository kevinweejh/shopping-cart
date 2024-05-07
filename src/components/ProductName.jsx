import PropTypes from 'prop-types';
import { memo } from 'react';

// TODO: Receive Product data from Product Card, which receives it from Shop.
const ProductName = memo(({ name, cartPage }) => {
  // TODO: Render the product name, with default styling.
  if (cartPage) {
    return (
      <div>
        <h1 className="font-semibold text-white">{name}</h1>
      </div>
    );
  }
  return (
    <div className="truncate">
      <h1 className="font-semibold text-white">{name}</h1>
    </div>
  );
});
ProductName.displayName = 'ProductName';

ProductName.propTypes = {
  name: PropTypes.string,
  cartPage: PropTypes.bool,
};

export default ProductName;
