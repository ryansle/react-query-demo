import { useState } from 'react';

// Components
import { 
  Box, 
  Heading, 
  Text, 
  Flex, 
  Code, 
  Button, 
  Center, 
  CircularProgress 
} from '@chakra-ui/react';
import Content from '../Content';

// Utilities
import { useQuery } from 'react-query';

const fetchPeople = async (page) => {
  const result = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return result.json();
};

const DisablePauseQueries = () => {
  const [page, setPage] = useState(1);
  const {
    isIdle,
    isLoading,
    isError,
    isSuccess,
    data,
    error,
    refetch,
    isFetching,
  } = useQuery(['people', page], () => fetchPeople(page), {
    enabled: false,
  });

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
  };

  const refresh = () => {
    const random = randomNumber(1, 5);
    setPage(random);
    refetch();
  };

  return (
    <Box>
      <Flex justify='space-between' align='center' mb={5}>
        <Heading size='lg'>Disabling/Pausing Queries</Heading>
        <Button
          colorScheme='teal'
          onClick={refresh}
        >
          Refetch
        </Button>
      </Flex>
      <Text fontSize='lg' mb={5}>
        By default, React Query will run its queries at the start of a components mount,
        and persist that data for as long as its <Code>cacheTime</Code> remains active
        (5 minutes by default). We can disable queries from automatically running by passing{' '}
        <Code>enabled = false</Code> as a prop, and also toggle manual refetching from an API.
      </Text>
      <Center mb={5}>
        {isIdle && <Text fontSize='2xl'>Query is idle - it has not been ran yet.</Text>}
        {isLoading && <CircularProgress isIndeterminate color='teal' />}
        {isError && <Text fontSize='2xl'>An error occurred: {error.message}</Text>}
        {isFetching && <Text fontSize='2xl'>Fetching... please wait.</Text>}
      </Center>
      <Center>
        {isSuccess && (
          <Flex justify='space-between' wrap='wrap'>
            {data.results.map((person, index) => (
              <Content 
                key={index} 
                variant='person'
                data={person}
              />
            ))}
          </Flex>
        )}
      </Center>
    </Box>
  );
};

export default DisablePauseQueries