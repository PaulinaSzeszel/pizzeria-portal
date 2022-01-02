import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should renders without crashing', () => {
  shallow(<App />);
});
