import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/toggleComponent');

  return (
    <>
      <h1>Feature Toggle React App</h1>
      <h3>Find out the toggle state</h3>
      <button type="button" onClick={handleClick}>
        Find
      </button>
    </>
  );
};

export default Home;
