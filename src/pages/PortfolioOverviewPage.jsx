import React, { useEffect, useState } from 'react';
import { getPortfolioOverview } from '../services/api';
import './PortfolioOverview.css'; // Custom CSS for visual improvement

const PortfolioOverview = () => {
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    getPortfolioOverview()
      .then((res) => setOverview(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="portfolio-container">
      <h2>📊 Portfolio Overview</h2>
      <div className="card-list">
        {overview.map((item, index) => (
          <div key={index} className="portfolio-card">
            <h3>{item.stockSymbol}</h3>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Buy Price:</strong> ₹{item.buyPrice.toFixed(2)}</p>
            <p><strong>Current Price:</strong> ₹{item.currentPrice.toFixed(2)}</p>
            <p className={item.gainLoss >= 0 ? "gain" : "loss"}>
              <strong>Gain/Loss:</strong> ₹{item.gainLoss.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioOverview;
