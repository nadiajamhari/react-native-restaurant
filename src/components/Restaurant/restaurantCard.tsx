import {
  Pressable,
  Text,
  Box,
  AspectRatio,
  Image,
  Stack,
  Heading,
} from 'native-base';
import React from 'react';

interface IRestaurant {
  name: string;
  urlImage: string;
  tagLine: string;
  onPress: (name: string) => void;
}
const RestaurantCard: React.FC<IRestaurant> = ({
  name,
  urlImage,
  tagLine,
  onPress,
}) => {
  return (
    <Box alignItems="center" mb="2" mt="3">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1">
        <Pressable onPress={() => onPress(name)}>
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: urlImage,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={2}>
            <Stack space={2}>
              <Heading size="md">{name}</Heading>
              <Text>{tagLine}</Text>
            </Stack>
          </Stack>
        </Pressable>
      </Box>
    </Box>
  );
};
export default RestaurantCard;
