import PropTypes from 'prop-types';
import { useState, memo, useCallback } from 'react';
import ProductImage from './components/ProductImage';
import ProductName from './components/ProductName';
import ProductPrice from './components/ProductPrice';
import QuantityInput from './components/QuantityInput';
import AddToCartButton from './components/AddToCartButton';

// TODO: Set up state variable for selected quantity,
const ProductCard = memo(({ productData }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const handleDecrement = useCallback(() => {
    setSelectedQuantity((currentQuantity) => Math.max(0, currentQuantity - 1));
  }, []);

  const handleIncrement = useCallback(() => {
    setSelectedQuantity((currentQuantity) => currentQuantity + 1);
  }, []);

  return (
    <div className="flex flex-col p-2 relative w-full border-2 border-white rounded-lg bg-white">
      <ProductImage imageUrl={productData.image} cartPage={false} />
      <form className="p-2 rounded-lg bg-gray-700 h-full">
        <div className="flex flex-col">
          <ProductName name={productData.title} cartPage={false} />
          <ProductPrice price={productData.price} />
          <QuantityInput
            selectedQuantity={selectedQuantity}
            setSelectedQuantity={setSelectedQuantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
          <AddToCartButton
            productData={productData}
            selectedQuantity={selectedQuantity}
            setSelectedQuantity={setSelectedQuantity}
          />
        </div>
      </form>
    </div>
  );
});
ProductCard.displayName = 'ProductCard';

ProductCard.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default ProductCard;
