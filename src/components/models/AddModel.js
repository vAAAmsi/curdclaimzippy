import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    Text,
    Box,
    Input,
    Textarea,
    Stack,
    Button
} from '@chakra-ui/react'

import React from 'react'

const AddModel = ({ isModalOpen, closeModal }) => {
    const addtask = () => {
        console.log("added");
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
            <Box display="flex" w="100%" flexDir="column" gap="20px">
                <Input variant='outline' placeholder="title" />
                <Textarea placeholder='Enter description'/>
                <Stack>
                    <Button bg='#2ECC71' color="white"
                     _hover={{ noOfChildren: 1, bg: 'linear-gradient(89.43deg, #55DDEE -5.95%, #004AAD 53.42%)' }}
                     onClick={addtask}
                    >
                        Add
                    </Button>
                    <Button onClick={closeModal}>
                        cancel
                    </Button>
                </Stack>
            </Box>
        </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AddModel
