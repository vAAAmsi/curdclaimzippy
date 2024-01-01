import {
  Flex,
  Box,
  Input,
  Textarea,
  Stack,
  Button,
  FormControl
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import TopBar from '../components/TopBar'
import { connect } from 'react-redux'
import { Editing } from '../redux-store/actions'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../App.css'
const EditPage = ({Editing}) => {
  const location = useLocation();
  const [Rdata, setRdata] = useState(location.state);
  const [updatedTitle, setUpdatedTitle] = useState(Rdata?.title);
  const [updatedDesc, setUpdatedDesc] = useState(Rdata?.desc);
  const [hasChanges, setHasChanges] = useState(false);
  const navigate = useNavigate()

  const UpdateHandler = (e) => {
    e.preventDefault();
    if(hasChanges){
     Editing({
      id : Rdata?.id,
      title : updatedTitle,
      desc : updatedDesc
     })
   }
   Swal.fire({
     title:'Successfully updated !',
     icon :'success'
   })
   navigate('/')
  }
 
  useEffect(() => {
    if (updatedTitle !== Rdata?.title || updatedDesc !== Rdata?.desc) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [updatedTitle,updatedDesc]);

  return (
    <>
      <TopBar title="Edit Page"/>
      <Flex gap="1rem" mb={5} 
       justifyContent="center" mt="5%" alignItems="center">
        <form 
        onSubmit={(e) =>  UpdateHandler(e)} 
        // style={{width:"50%"}}
        className="form"
        >
        <FormControl >
          <Box display="flex" w="100%" flexDir="column" gap="20px">
            <Input 
              value={updatedTitle}
              variant='outline'
              placeholder="Title"
              onChange={(e) => setUpdatedTitle(e.target.value)}
              isRequired
            />
            <Textarea 
              value={updatedDesc}
              placeholder='Enter description'
              onChange={(e) => setUpdatedDesc(e.target.value)}
              required
            />
            <Stack>
              <Button  bg='#2ECC71' color="white"
              _hover={{ noOfChildren: 1, bg: 'linear-gradient(89.43deg, #55DDEE -5.95%, #004AAD 53.42%)' }}
              type='submit'
              isDisabled={!hasChanges}
              >
                Update
              </Button>
              <Button 
              onClick={() => navigate('/')}
              >
                cancel
              </Button>
            </Stack>
          </Box>
        </FormControl>
        </form>
        </Flex>
    </>
  )
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps,{ Editing }) (EditPage);
