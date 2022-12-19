import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Heading,
  Text,
  ScrollView,
  Stack,
  AspectRatio,
  Image,
  Box,
} from 'native-base';
import {RootStackParams} from '../../../routesTabNavigator';
// import TopBackNavigation from '../Common/topBackNavigation';

type Props = NativeStackScreenProps<RootStackParams, 'RestaurantDetails'>;

const RestaurantDetails = ({route}: Props) => {
  return (
    <ScrollView>
      {/* <TopBackNavigation /> */}
      <Stack space={3} p="4">
        <Heading textAlign="center">{route.params.name}</Heading>
        <Box borderWidth="1" borderColor="coolGray.200" shadow="5">
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{uri: route.params.urlImage}}
              alt={route.params.urlImage}
            />
          </AspectRatio>
        </Box>
        <Text textAlign="center" italic>
          {route.params.tagLine}
        </Text>
      </Stack>
    </ScrollView>
  );
};

export default RestaurantDetails;
