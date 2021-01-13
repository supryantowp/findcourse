import { Avatar, Icon, IconButton, Stack } from '@chakra-ui/react'
import { BiBasket, BiCreditCard, BiGlobe, BiUserCircle } from 'react-icons/bi'
import { VscBellDot } from 'react-icons/vsc'

const NavMap = () => {
  return (
    <Stack
      pos='relative'
      top='-150px'
      mx='auto'
      maxW='sm'
      bg='#0B0F20'
      direction='row'
      borderRadius='2xl'
      justify='space-between'
      align='center'
      p={4}
    >
      <Avatar src='/ava.png' />
      <IconButton
        variant='ghost'
        aria-label='activity'
        icon={<Icon color='#87C754' as={BiGlobe} />}
      />
      <IconButton
        variant='ghost'
        aria-label='activity'
        icon={<Icon as={VscBellDot} />}
      />
      <IconButton
        variant='ghost'
        aria-label='activity'
        icon={<Icon as={BiCreditCard} />}
      />
      <IconButton
        variant='ghost'
        aria-label='activity'
        icon={<Icon as={BiBasket} />}
      />
      <IconButton
        variant='ghost'
        aria-label='activity'
        icon={<Icon as={BiUserCircle} />}
      />
    </Stack>
  )
}

export default NavMap
