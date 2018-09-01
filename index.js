import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

import itemsList from './components/itemsList';

const store = configureStore();

render(
  <Provider store={store}>
    <ItemsList />
  </Provider>,
  document.getElementById('app')
);