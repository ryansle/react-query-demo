// Components
import { Box, Heading, Divider, } from '@chakra-ui/react';
import Navbar from '../components/Navigation/Navbar';
import ParallelQueries from '../components/Demos/ParallelQueries';
import DisablePauseQueries from '../components/Demos/DisablePauseQueries';
import GlobalizedSettings from '../components/Demos/GlobalizedSettings';
import Redux from '../components/Demos/Redux';

// Utilities
import Head from 'next/head';

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em' mb='300px'>
        <Head>
          <title>React-Query Demo</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Heading size='xl' mb={10}>Basic Features</Heading>
        <ParallelQueries />
        <Divider my={10} />

        {/* Disable/Pause Queries & Manual Refresh */}
        <DisablePauseQueries />
        <Divider my={10} />

        {/* Globalized query settings */}
        <GlobalizedSettings />
        <Divider my={10} />

        {/* Infinite scrolling with Infinite Queries */}
        <Divider my={10} />

        {/* Mutations */}
        <Divider my={10} />

        {/* Redux */}
        <Redux />
      </Box>
    </Box>
  );
};

export default Home;