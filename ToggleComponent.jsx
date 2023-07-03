import * as React from 'react';
import { Link } from 'react-router-dom';

import { fetchToggleApi, featureToggle } from './featureToggleApi';

const ToggleComponent = () => {
  const [loading, setLoading] = React.useState(false);
  const [toggleState, setToggleState] = React.useState();

  const fetchToggles = () => {
    setLoading(true);
    fetchToggleApi().then(({ data }) => {
      setToggleState(data);
      console.log('data', data);
      setLoading(false);
    });
  };

  React.useEffect(fetchToggles, []);

  const handleButtonToggle = () => {
    fetchToggles();
  };
  const message = loading
    ? 'Loading...'
    : `Feature Toggle - ${toggleState ? 'Enabled' : 'Disabled'}`;
  return (
    <>
      <Link to="/">Back</Link>
      <br />
      <h1>{message}</h1>
      <button onClick={handleButtonToggle}>
        {toggleState ? 'Disable Toggle' : 'Enable Toggle'}
      </button>
      <br />
    </>
  );
};

export default ToggleComponent;
