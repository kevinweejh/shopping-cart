import PropTypes from 'prop-types';
import { memo } from 'react';

// TODO: Receive quantity prop from Product Card or Cart, keeps it updated
const QuantityInput = memo(({ selectedQuantity, setSelectedQuantity, handleDecrement, handleIncrement }) => {
  // TODO: Add manual numeric input, ensure it keeps state updated
  // TODO: Add increment/decrement buttons, ensure it keeps state updated
  return (
    <div className="flex flex-row relative my-2 w-full h-6">
      <button type="button" onClick={handleDecrement} className="absolute left-2 z-10">
        -
      </button>
      <input
        type="number"
        value={selectedQuantity}
        onChange={(e) => setSelectedQuantity(Number(e.target.value))}
        className="no-spinners text-center absolute rounded-md w-full"
      ></input>
      <button type="button" onClick={handleIncrement} className="absolute right-2">
        +
      </button>
    </div>
  );
});
QuantityInput.displayName = 'QuantityInput';

QuantityInput.propTypes = {
  selectedQuantity: PropTypes.number,
  setSelectedQuantity: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleIncrement: PropTypes.func,
};

export default QuantityInput;
