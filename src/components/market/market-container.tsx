import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import Market from './market';
import './market.css';
import MarketHeader from './market-header';

// This component is a container for the Market component.
// It fetches data from an API and passes it to the Market component.
function MarketContainer() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch('https://api.sampleapis.com/futurama/characters');
      const json = await resp.json();
      setData(json);
    } catch (err: any) {
      setData(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="market-container">
      <MarketHeader />
      <div className="container body">
        {isLoading ? <CircularProgress color="success" /> : <Market data={data} />}
      </div>
    </div>
  );
}

export default MarketContainer;
