import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeIcon from './src/assets/icons/homeIcon';
import RestaurantIcon from './src/assets/icons/restaurantsIcon';

import Home from './src/components/Common/home';
import RestaurantDetails from './src/components/Restaurant/restaurantDetails';
import RestaurantList from './src/components/Restaurant/restaurantList';

export type RootStackParams = {
  Home: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  RestaurantDetails: {
    name: string;
    urlImage: string;
    tagLine: string;
  };
};

const RootStack = createDrawerNavigator<RootStackParams>();
// createNativeStackNavigator<RootStackParams>();

export type RestaurantsStackParams = {
  RestaurantsList: undefined;
  RestaurantDetails: {
    name: string;
    urlImage: string;
    tagLine: string;
  };
};
const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();
const RestaurantRoutes = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName="RestaurantsList"
      screenOptions={{headerShown: false}}>
      <RestaurantsStack.Screen
        name="RestaurantsList"
        component={RestaurantList}
        options={{headerShown: false}}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
    </RestaurantsStack.Navigator>
  );
};

const Routes = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
        }}
      />
      <RootStack.Screen
        name="RestaurantsStack"
        component={RestaurantRoutes}
        options={{
          title: 'Restaurants',
          drawerLabel: 'Restaurant List',
          drawerIcon: ({color, size}) => (
            <RestaurantIcon color={color} size={size} />
          ),
        }}
      />
    </RootStack.Navigator>
  );
};

export default Routes;
