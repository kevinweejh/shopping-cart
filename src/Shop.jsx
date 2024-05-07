import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const Shop = () => {
  const { loading, productDataAll } = useOutletContext();
  if (loading) return <h2 className="text-white">loading...</h2>;
  return (
    <>
      <h1 className="font-semibold my-2 text-white text-3xl">Shop</h1>
      <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-3 w-screen md:w-2/3 2xl:w-1/2">
        {productDataAll &&
          productDataAll.map((productData) => {
            return <ProductCard key={productData.id} productData={productData} />;
          })}
      </div>
    </>
  );
};

Shop.propTypes = {
  loading: PropTypes.bool,
  productDataAll: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      category: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};

export default Shop;
