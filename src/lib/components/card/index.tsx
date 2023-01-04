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
    <Box bg="red">
       {size === 'sm' && (
        <Flex >
            <Text>{title}</Text>
         
        </Flex>
       )}
         {size === 'md' && (
        
            <Flex>
            <Text>{title}</Text>
            <Text>{content}</Text>
        </Flex>)}
            {size === 'lg' && (
                 <Flex>
                 <Text>{title}</Text>
                 <Text>{content}</Text>
             </Flex>)}

    </Box>
  )
}
