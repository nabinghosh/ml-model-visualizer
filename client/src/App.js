// import logo from './logo.svg';
import './styles/App.css';
// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import RealTimeCharts from './components/RealTimeCharts';
import ParameterControl from './components/ParameterControl';

const App = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [hyperparameters, setHyperparameters] = useState({ epochs: 10 });
  const [visualData, setVisualData] = useState(null);

  const handleModelSelect = (model) => {
    setSelectedModel(model);
  };

  const handleTrain = () => {
    axios.post('http://localhost:5000/train', {
      model: selectedModel,
      hyperparameters
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.error(error);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('http://localhost:5000/visualization').then(response => {
        setVisualData(response.data);
      }).catch(error => {
        console.error(error);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <Sidebar onModelSelect={handleModelSelect} />
      <div className="main-content">
        <h1>ML Model Visualizer</h1>
        <ParameterControl onParamsChange={setHyperparameters} />
        <button onClick={handleTrain}>Train {selectedModel}</button>
        <RealTimeCharts data={visualData} />
      </div>
    </div>
  );
};

export default App;


