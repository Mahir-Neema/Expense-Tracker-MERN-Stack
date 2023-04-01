import React, { useEffect, useState } from 'react'
import {Text,FormControl,FormLabel,Input,FormHelperText, Select, Box, Flex, Button, Alert, AlertIcon,} from '@chakra-ui/react'
import axios from 'axios';

type Props = {}

function Expenseslist({}: Props) {
  const [username,setusername] = useState('');
  const [users,setusers] = useState(["Testuser 16:25"]);
  const [expenses,setexpenses] = useState([]);

  useEffect(()=>{
      axios.get('http://localhost:5000/users').then((res)=>{
        if(res.data.length>0){
          setusers(res.data.map((user:{},index:number)=> res.data[index].username));
          setusername(res.data[0].username);
        }
      }).catch(()=> console.log("error occured at fetching users"));
  },[])

  const getuserdata = (event: React.ChangeEvent<HTMLInputElement>) =>{
      setusername(event.target.value);
  }

  return (
    <div>
        <div style={{margin:"auto",width:"50%"}}>
        <FormControl isRequired mt="3" mb="3">
            <FormLabel >UserName:</FormLabel>
                <Select placeholder='select user' onChange={getuserdata} size='sm'>
                  <>
                    {users.map((users)=>{
                      return <option key="index" value={users}>{users}</option>
                    })}
                  </>
            </Select>
            {username ?<FormHelperText>{username} user selected</FormHelperText>:<FormHelperText>Please select the user</FormHelperText>}
        </FormControl>
        </div>
    </div>
  )
}

export default Expenseslist