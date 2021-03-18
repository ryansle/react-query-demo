// Components
import { Box, Heading } from '@chakra-ui/react';
import Navbar from '../components/Navigation/Navbar';

const People = () => {
  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em'>
        <Heading size='lg'>People</Heading>
      </Box>
    </Box>
  );
}

export default People;