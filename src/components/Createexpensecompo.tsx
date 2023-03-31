import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios';
import {Text,FormControl,FormLabel,Input,FormHelperText, Select, Box, Flex, Button, Alert, AlertIcon,} from '@chakra-ui/react'


type Props = {}

function Createexpensecompo({}: Props) {
    const [username,setusername] = useState('');
    const [users,setusers] = useState(["Testuser 16:25"]);
    const [des,setdes] = useState('');
    const [cost,setcost] = useState('');
    const [date,setDate] = useState('');

    const [alert,setalert] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:5000/users').then((response)=>{
            if(response.data.length > 0){
                setusers(response.data.map((user:{},index:number) => response.data[index].username));
                setusername(response.data[0].username);
            } 
        })
        .catch(()=> console.log("can't fetch usernames"))
    },[]);

    const expense = {
        username: username,
        description: des,
        cost: cost,
        date: date
    }

    const submitExpense = () =>{
        console.log(expense);
        axios.post('http://localhost:5000/expenses/add',expense).then(res => console.log("added "+res.data));
        setalert(true);
        setTimeout(() => {
            setalert(false);
            setusername('');
            setdes('');
            setcost('');
            setDate('');
        }, 3000);
        
    }

    return (
        <div>  
            {/* style={{margin:"50px",marginTop:"100px"}} */}
            <Text fontSize='2xl' textAlign="center" mb="5">Create New Expense Log</Text>
            <Flex justify="space-between" ml="100">
                <form style={{width:"40vw"}} onSubmit={submitExpense}>
                    <FormControl isRequired mb="3">
                        <FormLabel >UserName:</FormLabel>
                        <Select placeholder='select user' onChange={(e)=>setusername(e.target.value)} size='sm'>
                            <>
                                {users.map((users,index)=>{
                                    return <option key="index" value={users}>{users}</option>
                                })}
                            </>
                        </Select>
                        {username ?<FormHelperText>{username} user selected</FormHelperText>:<FormHelperText>Please select the user</FormHelperText>}
                    </FormControl>

                    <FormControl mb="3">
                        <FormLabel>Description</FormLabel>
                        <Input type='text' onChange={(e)=>setdes(e.target.value)} size='xs'/>
                        {des?<FormHelperText>You added {des} as an expense</FormHelperText>:<FormHelperText>Add the description of Expense</FormHelperText>}
                    </FormControl>

                    <FormControl mb="3">
                        <FormLabel>Expense</FormLabel>
                        <Input type='number' onChange={(e)=>setcost(e.target.value)} size='xs'/>
                        {des ?<FormHelperText>{cost} ruppes spent on {des}</FormHelperText>:<FormHelperText>Add the cost of Expense</FormHelperText>}
                    </FormControl>

                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <Input type='date' onChange={(e)=>setDate(e.target.value)} size='xs'/>
                        {date ?<FormHelperText>{date} selected</FormHelperText>:<FormHelperText>Add the date of expense</FormHelperText>}
                    </FormControl>

                    {cost?<Button mt="5" colorScheme="yellow" onClick={submitExpense}>Create Expense Log</Button>:<Text color="red"><br/>Add cost of expense</Text>}
                </form>
                {alert ?<Alert status='success' variant='solid' w="100" h="10"><AlertIcon/>Expense uploaded to the server. Fire on!</Alert>:
                <Box mr="100" bgColor="#ececec" mt="4" border="1px" p="10" borderColor="blue" w="400px" h="200" borderRadius="6px">
                    {username ? <Text>{username}</Text>: <Text>No user selected</Text>}
                    <br/>
                    {username&&cost&&date ?<Text>Adding {des} as an Expense of cost {cost} on {date}</Text>:<Text>Add the fields</Text>}
                </Box>}
            </Flex>
        </div>
    )
}

export default Createexpensecompo