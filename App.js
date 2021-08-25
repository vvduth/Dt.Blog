import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from './src/screens/indexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen  from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
  {
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
  }, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
    title: 'Blogs'
    }
  }
);

const App =  createAppContainer(navigator);

export default () => {
  return <Provider><App /></Provider>;
};


//this app we use context, quite similar to props
//context can move infor from a parent to some nested child directly
//I dont export app directly as usual
// use a blogprovider to wrap all the thing