import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStyles from '../../styles';
import logo from '../../assets/bancame_logo_white.svg';

export default function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/market');
  };
  const goToMaterialUI = () => {
    window.open('https://mui.com', '_blank');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <div className={classes.buttonsContainer}>
          <Button
            onClick={handleClick}
            className={classes.button}
            variant="contained"
          >
            Ir a Market
          </Button>

          <Button
            onClick={goToMaterialUI}
            className={classes.button}
            variant="contained"
          >
            Ir a Material UI
          </Button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
