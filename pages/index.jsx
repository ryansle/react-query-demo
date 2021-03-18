// Components
import { Box, Heading } from '@chakra-ui/react';
import Navbar from '../components/Navigation/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box px={['1em', '3em', '20em']} pt='7em'>
        <Head>
          <title>React-Query Demo</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Heading size='lg'>Basic Features</Heading>
      </Box>
    </Box>
  );
}
