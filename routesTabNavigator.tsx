import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeIcon from './src/assets/icons/homeIcon';
import RestaurantIcon from './src/assets/icons/restaurantsIcon';

import Home from './src/components/Common/home';
import Login from './src/components/Common/login';
import SignUp from './src/components/Common/signUp';
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
  AuthStack: NavigatorScreenParams<AuthStackParams>;
};

const RootStack = createBottomTabNavigator<RootStackParams>();
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
    <RestaurantsStack.Navigator initialRouteName="RestaurantsList">
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

export type AuthStackParams = {
  Login: undefined;
  SignUp: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

const Routes = () => {
  const renderAuthenticationContent = () => {
    const isLoggedIn = true;

    if (isLoggedIn) {
      return (
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <HomeIcon color={color} size={size} />
              ),
            }}
          />
          <RootStack.Screen
            name="RestaurantsStack"
            component={RestaurantRoutes}
            options={{
              title: 'Restaurants',
              tabBarLabel: 'Restaurant List',
              tabBarIcon: ({color, size}) => (
                <RestaurantIcon color={color} size={size} />
              ),
            }}
          />
        </RootStack.Navigator>
      );
    }

    return <AuthRoutes />;
  };
  return <>{renderAuthenticationContent()}</>;
};

export default Routes;
