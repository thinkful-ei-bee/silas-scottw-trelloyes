import React from 'react';
import ReactDOM from 'react-dom';

import List from './List.js';

describe('<List />', () => {
  it('renders without crashing', () => {
    
    const div = document.createElement('div');

    ReactDOM.render(<List header='test' cards={[]}/>, div);

    ReactDOM.unmountComponentAtNode(div);
  })
})