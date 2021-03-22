// Components
import { 
  Box, 
  Heading, 
  Text, 
  UnorderedList, 
  ListItem, 
  Code,
  Link,
} from '@chakra-ui/react';

const Redux = () => {
  return (
    <Box>
      <Heading size='lg' mb={5}>
        Can React Query Replace Redux?
      </Heading>
      <Text fontSize='lg' mb={5}>
        Short answer: in some cases. While Redux is a <b>client-state</b> library
        that is used to store asynchronous data, React Query is a <b>server-state</b>{' '}
        library that manages all the asynchronous operations happening behind the scenes 
        between your server and client.
      </Text>
      <Text fontSize='lg' mb={5}>
        Per the documentation, React Query <b>replaces the boilerplate code and 
        related wiring used to manage cache data in your client-state and replaces 
        it with just a few lines of code.</b>
      </Text>
      <Text fontSize='lg' mb={5}>
        Let's think of this in terms of what we're doing with the Cardholder Portal.
        Our problem right now is that, as we navigate around the web application, every 
        time we navigate back to a different screen, we have to run a query again to
        populate the page. We had two trains of thought for dealing with this problem
        initially:
      </Text>
      <UnorderedList mb={5}>
        <ListItem>
          <Text fontSize='lg'>
            Storing everything within sessionStorage to immediately pull it back out
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize='lg'>
            Installing Redux to create actions and reducers just to store data globally
          </Text>
        </ListItem>
      </UnorderedList>
      <Text fontSize='lg' mb={5}>
        In our case, I believe there is a third option: installing React Query and letting
        this library cache all of our data for us, in the same way I've demoed with the planets
        and people routes. Right now, on the cardholder portal, we used lifecycle functions 
        like <Code>useEffect()</Code> to run each query on component mount, and we store it 
        within state.
      </Text>
      <Text fontSize='lg' mb={5}>
        Instead, we can replace that with a few <Code>useQuery</Code> hooks and have that data
        persist within our React Query cache, which will not only make the application much
        quicker to run, but decrease our AWS costs from querying the database so often
        (that's how it works, right?).
      </Text>
      <Heading size='lg' mb={5}>HOWEVER</Heading>
      <Text fontSize='lg' mb={5}>
        I haven't used Redux before in any professional capacity, and still have a very limited
        understanding as to how it works. I might not be understanding the benefits of using
        React Query as well as I think, especially in comparison to a global state management
        tool. Please read through their{' '}
        <Link 
          href='https://react-query.tanstack.com/guides/does-this-replace-client-state'
          color='teal'
        >
          documentation
        </Link>{' '}
        to fill in any of the gaps that I've missed in my understanding.
      </Text>
    </Box>
  )
};

export default Redux;