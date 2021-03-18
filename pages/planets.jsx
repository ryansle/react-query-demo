// Components
import { Box, Heading, Flex, Wrap, CircularProgress, Text } from '@chakra-ui/react';
import Navbar from '../components/Navigation/Navbar';
import Content from '../components/Content';

// Utilities
import { useQuery } from 'react-query';

const fetchPlanets = async () => {
  const result = await fetch('https://swapi.dev/api/planets/');
  return result.json();
};

const Planets = () => {
  // Parameter one: key for this query
  // Parameter two: async function to be ran
  const { data, status } = useQuery('planet', fetchPlanets);

  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em'>
        <Heading size='lg' mb={5}>Planets</Heading>
        {status === 'loading' && (
          <Flex justify='center'>
            <CircularProgress isIndeterminate color='teal' />
          </Flex>
        )}

        {status === 'success' && (
          <Wrap justify='space-between' spacing={2}>
            {data.results.map((planet, index) => (
              <Content 
                key={index} 
                variant='planet'
                data={planet}
              />
            ))}
          </Wrap>
        )}

        {status === 'error' && (
          <Text fontSize='xl'>Error fetching data</Text>
        )}
      </Box>
    </Box>
  );
}

export default Planets;