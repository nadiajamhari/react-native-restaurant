import {useNavigation} from '@react-navigation/native';
import {Pressable, View} from 'native-base';
import React from 'react';
import BackIcon from '../../assets/icons/backIcon';

const TopBackNavigation = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        m="3"
        onPress={() => {
          navigation.goBack();
        }}>
        <BackIcon color="#333" size={25} />
      </Pressable>
    </View>
  );
};

export default TopBackNavigation;
