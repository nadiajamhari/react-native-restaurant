import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Pressable, View} from 'native-base';
import React from 'react';
import DrawerMenuIcon from '../../assets/icons/drawerMenuIcon';
import {RootStackParams} from '../../../routesTabNavigator';

const TopDrawerNavigation = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParams>>();

  return (
    <View>
      <Pressable
        m="3"
        onPress={() => {
          navigation.openDrawer();
        }}>
        <DrawerMenuIcon color="#333" size={25} />
      </Pressable>
    </View>
  );
};

export default TopDrawerNavigation;
