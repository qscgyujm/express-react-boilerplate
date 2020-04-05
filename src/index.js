import React from 'react';
import ReactDOM from 'react-dom';

import Test from './components/Test';

const Index = () => (
  <div>
    Welcome to React!
    <Test />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('root'));
