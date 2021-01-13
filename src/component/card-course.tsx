import { Box, Icon, Image, Text } from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'

interface CardCourseProps {
  fav?: boolean
  img: string
  name: string
  price: string
}

const CardCourse = ({ fav, img, name, price }: CardCourseProps) => {
  return (
    <Box>
      {fav ? (
        <Box
          textAlign='center'
          borderRadius='2xl'
          maxW='70px'
          h='33px'
          bgColor='#7653F6'
          pos='relative'
          top={8}
          left={90}
          py={1}
        >
          <Icon as={FiHeart} />
        </Box>
      ) : (
        <Box
          textAlign='center'
          borderRadius='2xl'
          maxW='70px'
          pos='relative'
          top={8}
          h='33px'
          left={90}
          py={1}
        ></Box>
      )}
      <Image
        w='160px'
        h='110px'
        htmlHeight='110px'
        htmlWidth='160px'
        borderRadius='2xl'
        src={img}
      />
      <Text mt={2}>{name}</Text>
      <Text color='gray.400'>{price}</Text>
    </Box>
  )
}

export default CardCourse
