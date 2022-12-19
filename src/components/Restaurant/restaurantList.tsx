import React from 'react';
import {Heading, ScrollView} from 'native-base';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RestaurantsStackParams} from '../../../routesTabNavigator';
import RestaurantCard from './restaurantCard';

type Props = NativeStackScreenProps<RestaurantsStackParams, 'RestaurantsList'>;

const RestaurantList = ({navigation}: Props) => {
  return (
    <ScrollView mt="5" mb="5">
      <Heading textAlign="center" size="lg">
        Restaurants List
      </Heading>
      <RestaurantCard
        name="Sushi"
        urlImage="https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg"
        tagLine="The taste is unforgettable"
        onPress={name => {
          navigation.push('RestaurantDetails', {
            name: name,
            urlImage:
              'https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg',
            tagLine: 'The taste is unforgettable',
          });
        }}
      />
      <RestaurantCard
        name="Seafood"
        urlImage="https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        tagLine="The greatest thing you must try."
        onPress={name => {
          navigation.push('RestaurantDetails', {
            name: name,
            urlImage:
              'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            tagLine: 'The greatest thing you must try.',
          });
        }}
      />
    </ScrollView>
  );
};

export default RestaurantList;
