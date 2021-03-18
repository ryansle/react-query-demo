// Components
import { Box, Flex, Link, Text, Button } from '@chakra-ui/react';

// Utilities
import { useRouter } from 'next/router';

const Navbar = ({ ...rest }) => {
  const router = useRouter();

  return (
    <Box 
      width='full'
      pos='fixed'
      bg='gray.900'
      borderBottomWidth='1px'
      zIndex='4'
    >
      <Flex 
        justify='space-between' 
        align='center'
        p={[0, 6]}
      >
        <Link href='/'>
          <Text fontSize='xl' fontWeight='bold'>
            REACT-QUERY DEMO
          </Text>
        </Link>
        
        <Box>
          <Button 
            onClick={() => router.push('/')}
            colorScheme='teal' 
            mr={5}
          >
            Home
          </Button>
          <Button 
            onClick={() => router.push('/planets')}
            colorScheme='teal' 
            mr={5}
          >
            Planets
          </Button>
          <Button onClick={() => router.push('/people')} colorScheme='teal'>
            People
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;