import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import AddModel from '../models/AddModel';
import { connect } from 'react-redux';
import { 
  DataAdding,
  Deleting,
  Editing
} from '../redux-store/actions';

const Page1 = ({
  state
}) => {
  console.log(state)
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <Flex w="100%" flexDir="column">
        <AddModel 
          isModalOpen={isModalOpen} 
          closeModal={() => setModalOpen(false)} 
        />
        <Flex 
         justifyContent="center"
         alignItems="center"
         mt="20px"
         w="100%"
         gap="20px"
        >
         <Input w="60%" variant='outline' placeholder='search for a task' />
         <Button 
          onClick={openModal}
          bg='#2ECC71'
          color="white"
          _hover={{ noOfChildren: 1, bg: 'linear-gradient(89.43deg, #55DDEE -5.95%, #004AAD 53.42%)' }}
         >
            Add A Task
         </Button>
        </Flex>
        <Flex
         justifyContent="center"
        //  alignItems="center"
         mt="5%"
         gap="20px"
         flexWrap="wrap"
        >
          {
            state?.map((item,index) => {
              return (
                <Box 
                 border="1px solid red"
                 w="15%"

                >
                  <Text 
                  mt="10px"
                  pr="10px"
                  pl="10px"
                  fontSize="18px"
                  color="green"
                  >
                    Title: <span style={{color:"black"}}>{item.title}</span>
                  </Text>
                  <Text pl="10px" fontSize="16px">Description:</Text>
                  <Text pl="10px" pr="20px" fontSize="15px" color="gray">{item.desc}</Text>
                </Box>
              )
            })
          }
        </Flex>
    </Flex>
  )
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, { DataAdding,Deleting,Editing }) (Page1);