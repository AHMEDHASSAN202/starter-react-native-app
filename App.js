import React from 'react';
import { View, Text } from 'react-native';
import AppProvider from './context/AppContext';
import { Home } from './screens/Home';

const App = () => {
  return (
    <AppProvider> 
      <Home />
    </AppProvider>
  );
};

export default App;
