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

const ViewModel = ({ isModalOpen, closeModal,data }) => {
    // console.log(data)
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} isCentered={true}>
    <ModalOverlay />
    <ModalContent w={{base:"85%"}}>
      <ModalHeader>
          Viewing the task named <span style={{color:"#2ECC71",fontSize:"24px",textDecoration:"underline"}}>{data?.title}</span>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <Flex gap="1rem" mb={5} flexDir="column" >
        <Text >
         {data?.title}
        </Text>
        <Text>
         {data?.desc}
        </Text>
      </Flex>
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default ViewModel