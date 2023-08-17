import { Button, HStack } from '@chakra-ui/react'
import { color } from 'framer-motion'
import {Link} from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <>
     <HStack p={4} shadow={'base'} bgColor={'blackAlpha.900'} >
      <Button variant={'unstyled'} color={'white'}>
        <Link to='/' > Home </Link>
      </Button>
      <Button variant={'unstyled'} color={'white'}>
        <Link to='/exchange' > Exchange </Link>  
      </Button>
      <Button variant={'unstyled'} color={'white'}>
        <Link to='/coins' > Coins </Link>
      </Button>
      </HStack>
    </>
  )
}

export default Header