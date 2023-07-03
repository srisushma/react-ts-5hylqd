import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Link,
  Route,
  useNavigate,
} from 'react-router-dom';

import Home from './Home';
import ToggleComponent from './ToggleComponent';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toggleComponent" element={<ToggleComponent />} />
      </Routes>
    </div>
  );
};

export default App;
