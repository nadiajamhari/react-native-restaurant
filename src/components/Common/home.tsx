import React from 'react';
import {Heading, ScrollView, Button, Box} from 'native-base';
import {StyleSheet} from 'react-native';
import RestaurantCard from '../Restaurant/restaurantCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../routes';

type Props = NativeStackScreenProps<RootStackParams, 'Home'>;
const Home = ({navigation}: Props) => {
  return (
    <ScrollView>
      <Heading size="xl" style={{textAlign: 'center'}} mb="2" mt="2">
        Most Popular Restaurants
      </Heading>
      <RestaurantCard
        name="Sushi"
        urlImage="https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg"
        tagLine="The taste is unforgettable"
        onPress={name => {
          navigation.navigate('RestaurantDetails', {
            name,
            urlImage:
              'https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg',
            tagLine: 'The taste is unforgettable',
          });
        }}
      />
      <RestaurantCard
        name="Fish"
        urlImage="https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        tagLine="The greatest thing you must try."
        onPress={name => {
          navigation.navigate('RestaurantDetails', {
            name,
            urlImage:
              'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            tagLine: 'The greatest thing you must try.',
          });
        }}
      />
      <RestaurantCard
        name="Crab"
        urlImage="https://images.pexels.com/photos/179834/pexels-photo-179834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        tagLine="Once you try it you can never live without it."
        onPress={name => {
          navigation.navigate('RestaurantDetails', {
            name,
            urlImage:
              'https://images.pexels.com/photos/179834/pexels-photo-179834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            tagLine: 'Once you try it you can never live without it.',
          });
        }}
      />
      <Box alignItems="center">
        <Button
          colorScheme="indigo"
          m="5"
          w="1/2"
          onPress={() => {
            navigation.navigate('RestaurantList');
          }}>
          See All Restaurants
        </Button>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headingOneText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000',
  },
});

export default Home;
