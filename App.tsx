
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Category from './Screens/Category';
import Categories from './Screens/Categories';
import axios from 'axios';


axios.defaults.baseURL = 'http://172.30.5.28:3000';

const AppNavigator = createStackNavigator({
  Categories: {
      screen: Categories
  },
  Category: {
      screen: Category
  }
});





 const App = createAppContainer(AppNavigator);




 export default App;
