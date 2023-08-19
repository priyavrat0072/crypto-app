import React from 'react'
import {Box, Image, Text} from '@chakra-ui/react'
import btcSrc from '../assets/btc.png'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={'full'} h={'85vh'}  >
      <motion.div style={{
        height:'80vh', 
      }}
      animate={{
        translateY:"25px",
        // translateX:"25px",
        // translateZ:"25px"
      }}
      transition={{
        duration:1,
        repeat:Infinity,
        repeatType:'reverse',
      }}
      >
      <Image w={'full'} h={'full'} objectFit={'contain'} src={btcSrc} filter={"grayscale(1)"} />
      </motion.div>
      <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whatsapp.700'} mt={'-15'}>XCrypto</Text>
    </Box>
  )
}

export default Home