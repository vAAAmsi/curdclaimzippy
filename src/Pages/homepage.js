import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import AddModel from '../models/AddModel';
import ViewModel from '../models/ViewModel';
import { connect } from 'react-redux';
import TopBar from '../components/TopBar';
import { 
  Deleting,
  Editing
} from '../redux-store/actions';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Page1 = ({
  state,
  Deleting
}) => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isViewModelOpen, setViewModelOpen] = useState(false)
  const [viewingData, setViewingData] = useState(null)
  const navigate = useNavigate()

  const openAddModal = () => {
    setAddModalOpen(true);
  };
  const openViewModel = (item) => {
    setViewingData(item)
    setViewModelOpen(true)
  };
  const deleteinghandle = (id) => {
   Deleting(id)
  }
  return (
    <Flex w="100%" flexDir="column">
      <TopBar title={"Tasks"} />
        <AddModel 
          isModalOpen={isAddModalOpen} 
          closeModal={() => setAddModalOpen(false)} 
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
          onClick={openAddModal}
          bg='#2ECC71'
          color="white"
          _hover={{ noOfChildren: 1, bg: 'linear-gradient(89.43deg, #55DDEE -5.95%, #004AAD 53.42%)' }}
         >
            Add A Task
         </Button>
        </Flex>
        {
          state?.length >0 ? (
            <Flex
         justifyContent="center"
         mt="5%"
         gap="20px"
         flexWrap="wrap"
        >
          {
            state?.map((item,index) => {
              return (
                <Box 
                 border="1px solid gray"
                 w={{base:"70%",md:"15%"}}
                 borderRadius="5px"
                 key={index}
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
                  <ViewModel 
                    isModalOpen={isViewModelOpen}
                    closeModal={() => setViewModelOpen(false)}
                    data={viewingData}
                  />
                  <Flex
                   gap="8px"
                   mb="10px"
                   pl="5px"
                   mt="10px"
                  >
                    <Button
                     onClick={() => deleteinghandle(item.id)}
                    >
                     Delete
                    </Button>
                    <Button
                    // onClick={() => console.log(index)}
                     onClick={() =>openViewModel(item)}
                    >
                      View
                    </Button>
                    <Button onClick={() => navigate('/edit')}>
                      Edit
                    </Button>
                  </Flex>
                </Box>
              )
            })
          }
        </Flex>
          ) : <Text mt="10%" textAlign="center">{"No Tasks Available. Please click on the Above Add a Task button to add some Tasks"}</Text>
        }
    </Flex>
  )
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, { Deleting, Editing }) (Page1);