import React from 'react';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import SplashScreen from './src/screens/SplashScreen';

import { StatusBar } from 'react-native';
import AddOn from './src/screens/AddOn';
import Menu from './src/screens/Menu';
import Cart from './src/screens/Cart';
import Checkout from './src/screens/Checkout';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="rgba(251, 188, 5, 1)" />
      {/* <SplashScreen />
    <SignUp />
    <Login /> */}
      {/* <Home /> */}
      {/* <AddOn /> */}
      {/* <AddOn coffee={true} /> */}
      {/* <Menu /> */}
      {/* <Cart /> */}
      <Checkout />
    </>
  );
}

export default App;