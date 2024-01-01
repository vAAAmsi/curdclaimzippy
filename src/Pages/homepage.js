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
import capitalize from '../utils/Capitalize';

const Page1 = ({
  state,
  Deleting
}) => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isViewModelOpen, setViewModelOpen] = useState(false)
  const [viewingData, setViewingData] = useState(null)
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()

  const openAddModal = () => {
    setAddModalOpen(true);
  };
  const openViewModel = (item) => {
    setViewingData(item)
    setViewModelOpen(true)
  };
  const deleteinghandle = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Deleting(id);
        Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
      }
    });
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
         <Input 
          w={{base:"50%",lg:"60%"}} 
          variant='outline' 
          placeholder='search for a task' 
          onChange={(e) => setSearchText(e.target.value)}
        />
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
          state?.length > 0 ? (
            <Flex w="100%" justifyContent="center">
              <Flex
                justifyContent="center"
                mt="5%"
                gap="30px"
                flexWrap="wrap"
                w="80%"
              >
                {
                  state.length!==0 && state.filter((i) => {
                    if(i.title !== undefined){
                      return i.title.toLowerCase().includes(searchText.toLowerCase())
                      
                    }
                  })
                  .map((item,index) => {
                    return (
                      <Box 
                        border="1px solid gray"
                        w={{base:"83%",sm:"60%",md:"40%",lg:"30%"}}
                        borderRadius="5px"
                        key={index}
                        mb="10px"
                      >
                        <Text 
                        mt="10px"
                        pr="10px"
                        pl="10px"
                        fontSize="18px"
                        color="green"
                        >
                          Title: <span style={{color:"black"}}>{capitalize(item.title)}</span>
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
                          mt="10px"
                          justifyContent="center"
                        >
                          <Button
                            bg="red"
                            color="white"
                            onClick={() => deleteinghandle(item.id)}
                          >
                            Delete
                          </Button>
                          <Button
                            color='white'
                            bg='#2ECC71'
                            onClick={() =>openViewModel(item)}
                          >
                            View
                          </Button>
                          <Button
                            color='white'
                            bg="orange"
                            onClick={() => navigate('/edit',{
                            state:item
                            })}
                          >
                            Edit
                          </Button>
                        </Flex>
                      </Box>
                    )
                  })
                }
              </Flex>
            </Flex>
          ) : <Flex justifyContent="center" >
            <Text 
           mt="10%" 
           textAlign="center"
           w={{base:"80%"}}
           fontSize="14px"
           >
            {"No Tasks Available. Please click on the Above Add a Task button to add some Tasks."}
          </Text>
          </Flex>
        }
    </Flex>
  )
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, { Deleting, Editing }) (Page1);