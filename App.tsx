
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './Screens/Cart';
import Category from './Screens/Category';
import Categories from './Screens/Categories';
import SettingScreen from './Screens/Settings';
import axios from 'axios';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
axios.defaults.baseURL = "http://172.30.5.28:3000";
import React, { Component } from 'react';
import Order from './Screens/Order';
import Orders from './Screens/Orders';
import { NativeBaseProvider } from 'native-base';
import Login from './Screens/Login';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

class Home extends React.Component<any, any> {
  render() {

    return (
      <Stack.Navigator >
        <Stack.Screen name="Categories" component={Categories} options={{ title: 'Categories' }} />
        <Stack.Screen name="Category" component={Category} options={{ title: 'Category' }} />
      </Stack.Navigator>
    )
  }
}



class OrderScreen extends React.Component<any, any> {
  render() {

    return (
      <Stack.Navigator >
        <Stack.Screen name="Orders" component={Orders} options={{ title: 'Orders' }} />
        <Stack.Screen name="Order" component={Order} options={{ title: 'Order' }} />
      </Stack.Navigator>
    )
  }
}

class Setting extends React.Component<any, any> {
  render() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Settings" component={SettingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoggedOut" component={Login}/>
      </Stack.Navigator>
    )
  }
}


class AppNavigator extends React.Component<any, any>{
  render() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} />
      <Tab.Screen name="OrdersList" component={OrderScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={Setting} options={{ title: 'Settings' }} />
    </Tab.Navigator>
  )
  }
}

  const LoginNavigator = () => {     
    return (
          <Stack.Navigator >
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}  />
            <Stack.Screen name="App" component={AppNavigator} options={{ headerShown: false }} />
          </Stack.Navigator>
        )
  }




const App = () => {
  return (


    <NativeBaseProvider>
      <NavigationContainer>
        <LoginNavigator />

      </NavigationContainer>
    </NativeBaseProvider>
  );
};



export default App;
