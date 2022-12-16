import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/components/Common/home';
import RestaurantDetails from './src/components/Restaurant/restaurantDetails';
import RestaurantList from './src/components/Restaurant/restaurantList';

export type RootStackParams = {
  Home: any;
  RestaurantList: any;
  RestaurantDetails: {
    name: string;
    urlImage: string;
    tagLine: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const Routes = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen
        name="RestaurantList"
        component={RestaurantList}
        options={{title: 'Restaurants'}}
      />
      <RootStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{title: 'About'}}
      />
    </RootStack.Navigator>
  );
};

export default Routes;
