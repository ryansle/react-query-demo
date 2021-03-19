import { useState } from 'react';

// Components
import { 
  Box, 
  Heading, 
  Flex, 
  Wrap, 
  CircularProgress, 
  Text, 
  Button
} from '@chakra-ui/react';
import Navbar from '../components/Navigation/Navbar';
import Content from '../components/Content';

// Utilities
import { useQuery } from 'react-query';

const fetchPlanets = async (page = 1) => {
  const result = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return result.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  // Parameter one: key for this query
  // Parameter two: async function to be ran
  const { data, status } = useQuery(['planets', page], () => fetchPlanets(page));

  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em'>
        <Heading size='xl' mb={5}>Planets</Heading>
        <Flex justify='space-between' mb={5}>
        {[1, 2, 3, 4, 5, 6].map((number) => (
            <Button
              key={number}
              colorScheme='teal'
              onClick={() => setPage(number)}
            >
              Page {number}
            </Button>
          ))}
        </Flex>

        {status === 'loading' && (
          <Flex justify='center'>
            <CircularProgress isIndeterminate color='teal' />
          </Flex>
        )}

        {status === 'success' && (
          <Wrap justify='space-between' spacing={2}>
            {data.results?.map((planet, index) => (
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