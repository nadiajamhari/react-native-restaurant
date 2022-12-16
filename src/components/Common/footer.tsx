import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Pressable, Text, View, Box} from 'native-base';
import React from 'react';
import {RootStackParams} from '../../../routes';

const Footer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View bg="amber.500">
      <Pressable
        onPress={() => {
          navigation.navigate('RestaurantList');
        }}>
        <Text ml="3" mb="1" mt="1">
          List of Restaurant
        </Text>
      </Pressable>
      <Pressable>
        <Text ml="3" mb="1" mt="1">
          Contact Us
        </Text>
      </Pressable>
    </View>
  );
};

export default Footer;
