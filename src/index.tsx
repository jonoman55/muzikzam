import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './app/store';
import './styles/index.css';

const container: HTMLElement = document.getElementById('root') as HTMLElement;
const root: Root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
