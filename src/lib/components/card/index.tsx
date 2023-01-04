import { Box, Flex, Show, Text } from '@chakra-ui/react'
import React from 'react'

export default function Card({
    title,
    content,
    cover,
    size
}:{
    title: string,
    content: string,
    cover: string,
    size: 'sm' | 'md' | 'lg'
}) {
  return (
    <Box bg="#00000040" h="100%" w="100%" borderRadius={13} p="2">
       {size === 'sm' && (
        <Flex  h="100%" w="100%">
            <Text>{title}</Text>
         
        </Flex>
       )}
         {size === 'md' && (
        
            <Flex flexDir="column"  h="100%" w="100%">
            <Text>{title}</Text>
            <Text>{content}</Text>
        </Flex>)}
            {size === 'lg' && (
                 <Flex maxWidth="200px" flexDir="column"  h="100%" w="100%" justifyContent="flex-end">
                 <Text fontWeight={500} fontSize={30}>{title}</Text>
                 <Text fontWeight={300} fontSize={20}>{content} this is some autogenerated content</Text>
             </Flex>)}

    </Box>
  )
}
