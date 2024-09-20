import React, { useState } from 'react';

const ModelSelection = ({ models, onModelSelect }) => {
    const [selectedModel, setSelectedModel] = useState('');

    const handleChange = (event) => {
        const model = event.target.value;
        setSelectedModel(model);
        onModelSelect(model);
    };

    return (
        <div>
            <label htmlFor="model-select">Select a Model:</label>
            <select id="model-select" value={selectedModel} onChange={handleChange}>
                <option value="" disabled>Select a model</option>
                {models.map((model, index) => (
                    <option key={index} value={model}>
                        {model}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ModelSelection;