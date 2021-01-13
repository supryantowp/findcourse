import { Flex, Select } from '@chakra-ui/react'
import React from 'react'

const FilterComunity = () => {
  return (
    <Flex py={4} align='start'>
      <Select h='45px' borderRadius='2xl' bgColor='#272D45' border='none'>
        <option value='All Category'>All Category</option>
      </Select>
      <Select
        ml={3}
        h='45px'
        borderRadius='2xl'
        bgColor='#272D45'
        border='none'
      >
        <option value='All Category'>Radius 10 km</option>
      </Select>
    </Flex>
  )
}

export default FilterComunity
