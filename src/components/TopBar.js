import { Flex } from '@chakra-ui/react'
import React from 'react'

const TopBar = ({title}) => {
  return (
    <Flex
     w="100%"
     height={{base: "70px",md: "80px",lg: "100px"}}
     bg='#2ECC71'
     justifyContent="center"
     alignItems="center"
     color="white"
     fontSize={{base:"24px",md:"36px",lg:"50px"}}
     fontWeight="600"
     fontFamily="Poppins"
    >
      {title}
    </Flex>
  )
}

export default TopBar;