import React from 'react'
import {Box,Button,Flex,HStack, useMediaQuery} from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  const isPc = useMediaQuery('(min-width: 600px)')
  return (<>
    <div>
        <Box as="section" bg="#fbc116" p="2" pt="5" pb="5">
            <Box as="nav">
                <HStack>
                  <Flex justify="space-between">
                    <Button variant="nav" _hover={{bg:"yellow.700",color:"white"}} borderRadius="1"><Link to="/">Expense Tracker</Link></Button>
                    <Button variant="nav" _hover={{bg:"yellow.700",color:"white"}} borderRadius="1"><Link to="/">Expenses</Link></Button>
                    <Button variant="nav" _hover={{bg:"yellow.700",color:"white"}} borderRadius="1"><Link to="/create">Create Expense Log</Link></Button>
                    <Button variant="nav" _hover={{bg:"yellow.700",color:"white"}} borderRadius="1"><Link to="/user">Create User</Link></Button>
                  </Flex>
                </HStack>
            </Box>
        </Box>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar