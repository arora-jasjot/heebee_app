import React from 'react';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import SplashScreen from './src/screens/SplashScreen';

import { StatusBar } from 'react-native';
import AddOn from './src/screens/AddOn';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="rgba(251, 188, 5, 1)" />
      {/* <SplashScreen />
    <SignUp />
    <Login /> */}
      {/* <Home /> */}
      {/* <AddOn /> */}
      <AddOn coffee={true} />
    </>
  );
}

export default App;