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

  const buttons = [
    { text: 'Page 1', onClick: () => setPage(1) },
    { text: 'Page 2', onClick: () => setPage(2) },
    { text: 'Page 3', onClick: () => setPage(3) },
  ];

  console.log(data);

  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em'>
        <Heading size='lg' mb={5}>Planets</Heading>
        <Flex justify='space-between' mb={5}>
          {buttons.map((button, index) => 
            <Button 
              key={index}
              colorScheme='teal'
              onClick={button.onClick}
            >
              {button.text}
            </Button>
          )}
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