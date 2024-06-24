import React, { useEffect, useState } from 'react';
import { CircularProgress, Paper } from '@mui/material';
import Market from './market';
import './market.css';

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
    <>
      <Paper elevation={3} className="container">
        <h1>Futurama</h1>
        <h3>Welcome to the futurama characters fan page</h3>
      </Paper>
      <div className="container body">
        <hr />
        {isLoading ? <CircularProgress color="success" /> : <Market data={data} />}
      </div>
    </>
  );
}

export default MarketContainer;
