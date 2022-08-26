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
import Bio from './src/screens/Bio';
import Email from './src/screens/Email';
import Confirmation from './src/screens/Confirmation';
import Membership from './src/screens/Membership';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="rgba(251, 188, 5, 1)" />
      {/* <SplashScreen /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <AddOn /> */}
      {/* <AddOn coffee={true} /> */}
      {/* <Menu /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <Bio /> */}
      {/* <Email /> */}
      {/* <Confirmation /> */}
      <Membership />
    </>
  );
}

export default App;