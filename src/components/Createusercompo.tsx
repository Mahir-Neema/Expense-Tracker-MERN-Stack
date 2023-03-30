import { FormControl, FormHelperText, FormLabel, Text, Input, Box, Button, Alert, AlertIcon } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';

type Props = {}

function Createusercompo({}: Props) {
    const [name,setname] = useState(''); 
    const [alert,setalert] = useState(false);

    const submituser = () =>{
        const user = name;
        console.log(user);
        setalert(true);

        setTimeout(() => {
            setalert(false);
        }, 3000);
    }

  return (
    <div>
        <Text fontSize='2xl' textAlign="center" mb="5">Create New user</Text>
        <Box mr="300" ml="300">
            {!alert?
                <form onSubmit={submituser}>
                <FormControl isRequired>
                    <FormLabel >UserName:</FormLabel>
                    <Input type='text' onChange={(e)=>setname(e.target.value)} placeholder='Enter the username' _placeholder={{ opacity: 1, color: 'gray.500' }}/>
                    <FormHelperText>{name}</FormHelperText>
                </FormControl>
                {name?<Button mt="5" colorScheme="yellow" onClick={submituser}>Add user</Button>:<Text>Enter the username</Text>}
                </form>:
                <Alert status='success' variant='solid' w="100" h="10"><AlertIcon/>User added 🥳</Alert>
            }
        </Box>
    </div>
  )
}

export default Createusercompo