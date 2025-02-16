import PropTypes from 'prop-types';
import { useState } from 'react';
import './NumberSteppers.css';

const NumberSteppers = ({
  initialValue,
  min = 1,
  step = 1,
  max = 60,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleDecrement = () => {
    setValue((prev) => {
      const newValue = prev - step;
      const finalValue = newValue < min ? min : newValue;
      onChange(finalValue);
      return finalValue;
    });
  };

  const handleIncrement = () => {
    setValue((prev) => {
      const newValue = prev + step;
      const finalValue = newValue > max ? max : newValue;
      onChange(finalValue);
      return finalValue;
    });
  };

  const handleInputChange = (e) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="divnumberstepper">
      <button className="buttonnumberstepper" onClick={handleDecrement}>
        -
      </button>
      <input
        className="inputnumberstepper"
        type="number"
        size="3"
        min={min}
        max={max}
        value={value}
        onChange={handleInputChange}
      />
      <button className="buttonnumberstepper" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

NumberSteppers.propTypes = {
  initialValue: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default NumberSteppers;
