// Components
import { Box, Heading, Text, Center, Code, Image } from '@chakra-ui/react';

const GlobalizedSettings = () => {
  return (
    <Box>
      <Heading size='lg' mb={5}>
        Globalized React Query Settings
      </Heading>
      <Text fontSize='lg' mb={5}>
        React Query now comes with a wrapper layer called the <Code>QueryClient</Code>.
        Previously, such as the case within <Code>DisablePauseQueries</Code>, we were able
        to customize specific queries to run initially or not, among other settings such as
        cache time, retry attempts, and stale time.
      </Text>
      <Text fontSize='lg' mb={5}>
        We can apply these settings globally to all queries by setting our default options
        within our query client like this:
      </Text>
      <Center>
        <Image 
          borderRadius={5}
          width='70%' 
          height='auto' 
          src='./queryclient.jpg' 
        />
      </Center>
    </Box>
  );
};

export default GlobalizedSettings;