import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react'

const Pin = () => {
  return (
    <Box
      borderRadius='2xl'
      p={4}
      maxW='258px'
      pos='relative'
      top='-600px'
      left='300px'
      bg='#0B0F20'
    >
      <Flex>
        <Image
          w='80px'
          h='80px'
          objectFit='cover'
          htmlWidth='80px'
          htmlHeight='80px'
          borderRadius='2xl'
          src='/image-6.png'
        />
        <Box ml={4}>
          <Text fontWeight='bold'>Do Yoga</Text>
          <Text color='gray.400'>$180</Text>
          <AvatarGroup size='xs' max={3}>
            <Avatar name='siska' src='/ava-2.png' />
            <Avatar name='shakira' src='/ava-3.png' />
            <Avatar name='udin' src='/ava.png' />
            <Avatar name='neecdeep' src='/ava-4.png' />
            <Avatar name='karube' src='/ava.png' />
          </AvatarGroup>
        </Box>
      </Flex>
      <Flex my={4}>
        <Button isFullWidth>Direction</Button>
        <Button bgColor='#FC772C' ml={2} isFullWidth>
          Join
        </Button>
      </Flex>
    </Box>
  )
}

export default Pin
