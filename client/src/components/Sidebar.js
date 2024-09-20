// src/components/Sidebar.js
import React from 'react';
import './styles/Sidebar.css';

const Sidebar = ({ onModelSelect }) => {
  return (
    <div className="sidebar">
      <h3>Model Categories</h3>
      <div className="category">
        <h4>Supervised Learning</h4>
        <ul>
          <li onClick={() => onModelSelect('Linear Regression')}>Linear Regression</li>
          <li onClick={() => onModelSelect('Logistic Regression')}>Logistic Regression</li>
          <li onClick={() => onModelSelect('Decision Trees')}>Decision Trees</li>
          <li onClick={() => onModelSelect('SVM')}>SVM</li>
          <li onClick={() => onModelSelect('Naive Bayes')}>Naive Bayes</li>
          <li onClick={() => onModelSelect('K-Nearest Neighbors')}>KNN</li>
        </ul>
      </div>
      <div className="category">
        <h4>Unsupervised Learning</h4>
        <ul>
          <li onClick={() => onModelSelect('K-Means Clustering')}>K-Means Clustering</li>
          <li onClick={() => onModelSelect('PCA')}>Principal Component Analysis</li>
        </ul>
      </div>
      <div className="category">
        <h4>Ensemble Learning</h4>
        <ul>
          <li onClick={() => onModelSelect('Random Forest')}>Random Forest</li>
          <li onClick={() => onModelSelect('XGBoost')}>XGBoost</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
