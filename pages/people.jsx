// Components
import { Box, Heading, Flex, Wrap, CircularProgress, Text } from '@chakra-ui/react';
import Navbar from '../components/Navigation/Navbar';
import Content from '../components/Content';

// Utilities
import { useQuery } from 'react-query';

const fetchPeople = async () => {
  const result = await fetch('https://swapi.dev/api/people');
  return result.json();
};

const People = () => {
  const { data, status } = useQuery('people', fetchPeople);

  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em'>
        <Heading size='lg' mb={5}>People</Heading>
        {status === 'loading' && (
          <Flex justify='center'>
            <CircularProgress isIndeterminate color='teal' />
          </Flex>
        )}

        {status === 'success' && (
          <Wrap justify='space-between' spacing={2}>
            {data.results.map((person, index) => (
              <Content 
                key={index} 
                variant='person'
                data={person}
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

export default People;