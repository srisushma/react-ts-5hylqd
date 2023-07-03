import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Hello = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/toggleComponent');

  return (
    <>
      <h1>Feature Toggle React App</h1>
      <button type="button" onClick={handleClick}>
        Home
      </button>
    </>
  );
};

export default Hello;
