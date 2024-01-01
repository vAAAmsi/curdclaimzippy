import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Flex,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import capitalize from '../utils/Capitalize'
const ViewModel = ({ isModalOpen, closeModal,data }) => {

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} isCentered={true}>
    <ModalOverlay />
    <ModalContent w={{base:"85%"}}>
      <ModalHeader>
          Viewing the task named <span style={{color:"#2ECC71",fontSize:"24px"}}>{capitalize(data?.title)}</span>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <Flex gap="0.5rem" mb={5} flexDir="column" >
        <Text fontWeight="500">Title: <span style={{fontWeight:"400"}}> {capitalize(data?.title)} </span></Text>
        <Text fontWeight="500">Description: <span style={{fontWeight:"400"}}>{data?.desc}</span></Text>
      </Flex>
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default ViewModel