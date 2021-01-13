/* eslint-disable react/no-children-prop */
import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { BiChevronLeft, BiSort } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {
  return (
    <Flex
      as='nav'
      pos='sticky'
      flexDir='row'
      align='center'
      justify='space-between'
      bg='gray.900'
      px={6}
      py={4}
      top={0}
      zIndex={8}
    >
      <Image src='/logo.png' h={18} objectFit='cover' />
      <InputGroup mx={8}>
        <InputRightElement children={<Icon color='gray.500' as={FiSearch} />} />
        <Input
          type='text'
          placeholder='Search by name or category'
          borderRadius='2xl'
        />
      </InputGroup>
      <HStack spacing={4}>
        <IconButton
          bgColor='#272D45'
          aria-label='Search database'
          icon={<Icon as={BiSort} />}
        />
        <IconButton
          bgColor='#272D45'
          aria-label='Search database'
          icon={<Icon as={BiChevronLeft} />}
        />
      </HStack>
    </Flex>
  )
}

export default Navbar
