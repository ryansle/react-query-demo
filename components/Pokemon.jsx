// Components
import { 
  Box, 
  Center,
  Image, 
  Heading, 
  Flex, 
  Tag 
} from '@chakra-ui/react';

const Pokemon = ({ id, name, sprite, types, ...rest }) => {
  const typeNames = types.map((typeObject) => typeObject.type.name)

  return (
    <Box 
      width={['50%', null, '15%']}
      borderRadius={10} 
      borderWidth='1px' 
      p={5}
      mb={5}
      {...rest}
    >
      <Image 
        src={sprite} 
        width='80px'
        height='auto'
      />
      <Heading size='sm' mb={3}>
        {id}: {name}
      </Heading>
      <Flex>
        {typeNames.map((type) => (
          <Tag 
            key={type} 
            variant='subtle' 
            mr={1}
            size='sm'
          >
            {type}
          </Tag>
        ))}
      </Flex>
    </Box>
  )
};

export default Pokemon;