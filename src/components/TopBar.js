import { Flex } from '@chakra-ui/react'
import React from 'react'

const TopBar = ({title}) => {
  return (
    <Flex
     w="100%"
     height="100px"
     bg='#2ECC71'
     justifyContent="center"
     alignItems="center"
     color="white"
     fontSize={{base:"24px",md:"36px",lg:"60px"}}
     fontWeight="600"
     fontFamily="Poppins"
    >
      {title}
    </Flex>
  )
}

export default TopBar;