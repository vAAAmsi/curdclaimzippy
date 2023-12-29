import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Flex,
    Box,
    Input,
    Textarea,
    Stack,
    Button,
    FormControl
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import React, {useState} from 'react'
import { DataAdding } from '../redux-store/actions'

const AddModel = ({ isModalOpen, closeModal,state, DataAdding}) => {
    console.log(state)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const addtask = (e) => {
        e.preventDefault()
        // console.log(title, desc)
        DataAdding({id : state.length + 1,title :title,desc : desc})
        closeModal()
    }

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
            Add A Task
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Flex gap="1rem" mb={5}>
           <form onSubmit={(e) => addtask(e)} style={{width:"100%"}}>
           <FormControl >
                <Box display="flex" w="100%" flexDir="column" gap="20px">
                    <Input 
                     variant='outline'
                     placeholder="Title"
                     onChange={(e) => setTitle(e.target.value)}
                     isRequired
                    />
                    <Textarea 
                     placeholder='Enter description'
                     onChange={(e) => setDesc(e.target.value)}
                     required
                    />
                    <Stack>
                        <Button  bg='#2ECC71' color="white"
                        _hover={{ noOfChildren: 1, bg: 'linear-gradient(89.43deg, #55DDEE -5.95%, #004AAD 53.42%)' }}
                        type='submit'
                        // onClick={addtask}
                        >
                            Add
                        </Button>
                        <Button onClick={closeModal}>
                            cancel
                        </Button>
                    </Stack>
                </Box>
            </FormControl>
           </form>
        </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { DataAdding })  (AddModel);
