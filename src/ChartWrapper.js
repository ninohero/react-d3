import React, { useRef, useState, useEffect } from 'react';
import D3Chart from './D3Chart';

const ChartWrapper = () => {
  const chartArea = useRef(null);
  const [chart, setChart] = useState(null);

  // useEffect seplaces componentDidMount
  useEffect(() => {
    if (!chart) {
      setChart(new D3Chart(chartArea.current));
    }
  }, [chart]);

  return <div className="chart-area" ref={chartArea}></div>;
};

export default ChartWrapper;
