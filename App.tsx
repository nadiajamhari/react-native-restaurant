import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import Home from './src/components/Home/home';
import Routes from './routes';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
