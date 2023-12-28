import { Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'

const Page1 = () => {
  return (
    <Flex w="100%">
        <Flex 
         justifyContent="center"
         alignItems="center"
         mt="20px"
        //  bg="red"
         w="100%"
         gap="20px"
        >
         <Input w="80%" variant='outline' placeholder='search' />
         <Button>
            Add A Task
         </Button>
        </Flex>
    </Flex>
  )
}

export default Page1;