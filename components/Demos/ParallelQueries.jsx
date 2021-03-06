// Components
import { Box, Heading, Text, Flex, Code } from '@chakra-ui/react';
import Pokemon from '../Pokemon';

// Utilities
import { useQueries } from 'react-query';

const fetchPokemonById = async (id) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return result.json();
};

const ParallelQueries = () => {
  const starters = [...Array(13).keys()].filter((num) => num !== 0);

  const pokemonQueries = useQueries(
    starters.map(id => {
      return {
        queryKey: ['pokemon', id],
        queryFn: () => fetchPokemonById(id),
      }
    })
  );

  console.log(pokemonQueries);

  return (
    <Box>
      <Heading size='lg' mb={5}>Parallel Queries</Heading>
      <Text fontSize='lg' mb={5}>
        React Query provides a hook for running a dynamic number 
        of queries in parallel called <Code>useQueries()</Code>.
      </Text>
      <Text fontSize='lg' mb={5}>
        Pictured below, I am making 12 asynchronous queries to a REST API to pull
        the first 12 pokemon. Notice how fast it is compared to the Cardholder Portal,
        which forces us to wait until all data can be loaded in before displaying anything.
      </Text>
      <Flex justify='space-around' wrap='wrap' mb={5}>
        {pokemonQueries.map((query, index) => (
          query.status === 'success' && (
            <Pokemon
              key={index}
              id={query.data.id}
              name={query.data.name}
              sprite={query.data.sprites.front_default}
              types={query.data.types}
            />
          )
        ))}
      </Flex>
      <Text fontSize='lg' mb={5}>
        Each query ran through react-query comes back in the form of a{' '}
        <Code>query</Code> object, holding fields such as the query's status,
        the number of attempts made, time it will remain cached for, and time
        it will be marked as stale for (to know when it should attempt to refresh).
      </Text>
      <Text fontSize='lg' mb={5}>
        By the way, just for fun, I also tried this on <b>all 893</b> pokemon. I wouldn't recommend it.
        It probably took a good minute or two to grab everything, and it froze the page up a few times.
      </Text>
    </Box>
  )
};

export default ParallelQueries;