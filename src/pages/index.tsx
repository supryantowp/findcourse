import { Box, Divider, Image, SimpleGrid, Text } from '@chakra-ui/react'
import * as React from 'react'

import CardCourse from '@/component/card-course'
import FilterComunity from '@/component/filter-comunity'
import FilterNearbyEvents from '@/component/filter-nearby-events'
import NavMap from '@/component/nav-map'
import Navbar from '@/component/navbar'
import Pin from '@/component/pin'

const Index = () => {
  return (
    <SimpleGrid h='100vh' overflow='hidden' columns={2}>
      <Box>
        <Navbar />
        <Box px={6} py={6}>
          <Text>Nearby Events</Text>
          <FilterNearbyEvents />

          <SimpleGrid columns={3}>
            <CardCourse img='/image-6.png' name='Calisthenic' price='$230' />
            <CardCourse img='/image-7.png' name='Do Yoga' price='$180' fav />
            <CardCourse img='/image-8.png' name='Team Sprint' price='$800' />
          </SimpleGrid>
        </Box>
        <Divider />
        <Box px={6} py={6}>
          <Text>From Community</Text>
          <FilterComunity />
          <SimpleGrid columns={3}>
            <CardCourse img='/image-6.png' name='Calisthenic' price='$230' />
            <CardCourse img='/image-7.png' name='Do Yoga' price='$180' fav />
            <CardCourse img='/image-8.png' name='Team Sprint' price='$800' />
          </SimpleGrid>
        </Box>
      </Box>
      <Box>
        <Image h='100vh' objectFit='cover' src='/map.png' />
        <NavMap />
        <Pin />
      </Box>
    </SimpleGrid>
  )
}

export default Index
