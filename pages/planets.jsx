// Components
import { Box, Heading } from '@chakra-ui/react';
import Navbar from '../components/Navigation/Navbar';

const Planets = () => {
  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em'>
        <Heading size='lg'>Planets</Heading>
      </Box>
    </Box>
  );
}

export default Planets;