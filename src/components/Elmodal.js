import React, {useEffect} from 'react'
import { Box, Text } from '@chakra-ui/react'
const Elmodal = ({setClicked, winner}) => {

        useEffect(() => {
            setTimeout(() => {
                setClicked(false)
            }, 2000)
        }, [setClicked]) 
    
      return (
        <Box
        mb={1}
        >
            <Text
            fontSize={25}>{winner ? 'There is a winner!' : 'Already clicked!' }</Text>
        </Box>
      )
    }

export default Elmodal