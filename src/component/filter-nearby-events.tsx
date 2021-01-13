import { Box, Flex, Select, Stack, Text } from '@chakra-ui/react'

const ButtonTabs = ({ active = false, children }) => (
  <Box
    textAlign='center'
    borderRadius='2xl'
    bgColor={active ? '#7653F6' : ''}
    px={4}
    py={2}
    _hover={{ cursor: 'pointer' }}
  >
    {children}
  </Box>
)

const FilterNearbyEvents = () => {
  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row' }}
      py={4}
      align='center'
    >
      <Stack
        h='45px'
        direction='row'
        borderRadius='2xl'
        bgColor='#272D45'
        px={3}
        spacing={2}
      >
        <ButtonTabs>Mo</ButtonTabs>
        <ButtonTabs active>Tu</ButtonTabs>
        <ButtonTabs>We</ButtonTabs>
        <ButtonTabs>Th</ButtonTabs>
        <ButtonTabs>Fr</ButtonTabs>
        <ButtonTabs>Sa</ButtonTabs>
        <ButtonTabs>Su</ButtonTabs>
      </Stack>
      <Select
        ml={3}
        h='45px'
        borderRadius='2xl'
        bgColor='#272D45'
        border='none'
      >
        <option value='paid'>Paid</option>
        <option value='not paid'>Not Paid</option>
      </Select>
    </Flex>
  )
}

export default FilterNearbyEvents
