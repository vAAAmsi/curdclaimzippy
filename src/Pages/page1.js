import { Button, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import AddModel from '../components/models/AddModel';
const Page1 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <Flex w="100%">
        <AddModel 
          isModalOpen={isModalOpen} 
          closeModal={() => setModalOpen(false)} 
        />
        <Flex 
         justifyContent="center"
         alignItems="center"
         mt="20px"
        //  bg="red"
         w="100%"
         gap="20px"
        >
         <Input w="60%" variant='outline' placeholder='search' />
         <Button 
          onClick={openModal}
         >
            Add A Task
         </Button>
        </Flex>
    </Flex>
  )
}

export default Page1;