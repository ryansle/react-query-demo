// Components
import { Box, Heading, Text } from '@chakra-ui/react';

const Content = ({ variant, data }) => {
  const { name, gender, birth_year, climate, population } = data;

  return (
    <Box 
      borderWidth='1px'
      borderRadius={5}
      p={5}
      width={["100%", "45%", "31%"]}
    >
      <Heading size='md' mb={2}>{name}</Heading>
      {variant === 'person' && (
        <Box>
          <Text>Gender: {gender}</Text>
          <Text>Birth Year: {birth_year}</Text>
        </Box>
      )}

      {variant === 'planet' && (
        <Box>
          <Text>Climate: {climate}</Text>
          <Text>Population: {population}</Text>
        </Box>
      )}
    </Box>
  )
};

export default Content;