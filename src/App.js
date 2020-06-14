import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import configStore from './store/storeConfig';

const store = configStore();

function App() {
  return (
    <Provider store={ store }>
      <Home />
    </Provider>
  );
}

export default App;
