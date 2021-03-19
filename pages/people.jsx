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

const fetchPeople = async (page = 1) => {
  const result = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return result.json();
};

const People = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(['people', page], () => fetchPeople(page));

  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em'>
        <Heading size='xl' mb={5}>People</Heading>
        <Flex justify='space-between' mb={5}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
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