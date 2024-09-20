// frontend/src/components/ParameterControl.js
import React, { useState } from 'react';

const ParameterControl = ({ onParamsChange }) => {
  const [epochs, setEpochs] = useState(10);

  const handleChange = () => {
    onParamsChange({ epochs });
  };

  return (
    <div>
      <label>Epochs:</label>
      <input type="number" value={epochs} onChange={e => setEpochs(e.target.value)} />
      <button onClick={handleChange}>Update Parameters</button>
    </div>
  );
};

export default ParameterControl;
