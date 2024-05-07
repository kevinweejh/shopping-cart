import PropTypes from 'prop-types';
import { memo } from 'react';

// TODO: Receive Product data props from Product Card, which receives it from Shop.
const ProductImage = memo(({ imageUrl, cartPage }) => {
  // TODO: Render image, let parent component determine size.
  if (cartPage) {
    return (
      <img
        className="grid-cols-1 h-auto w-full object-cover p-2 border-2 rounded-lg border-gray-700"
        src={imageUrl}
      ></img>
    );
  }
  return <img className="h-48 w-auto object-contain mb-2 p-2 border-2 rounded-lg border-gray-700" src={imageUrl}></img>;
});
ProductImage.displayName = 'ProductImage';

ProductImage.propTypes = {
  imageUrl: PropTypes.string,
  cartPage: PropTypes.bool,
};

export default ProductImage;
