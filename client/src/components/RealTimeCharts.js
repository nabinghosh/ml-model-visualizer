// frontend/src/components/RealTimeCharts.js
import React, { useEffect, useState } from 'react';

const RealTimeCharts = ({ data }) => {
  const [chartImage, setChartImage] = useState(null);

  useEffect(() => {
    if (data) {
      const latestEpoch = Object.keys(data).length - 1;
      setChartImage(data[latestEpoch]);
    }
  }, [data]);

  return (
    <div>
      <h3>Real-time Visualization</h3>
      {chartImage ? <img src={`data:image/png;base64,${chartImage}`} alt="Chart" /> : <p>No data available</p>}
    </div>
  );
};

export default RealTimeCharts;
