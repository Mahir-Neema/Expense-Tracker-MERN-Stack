import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import Createexpensecompo from './components/Createexpensecompo'

function App() {

  return (
    <ChakraProvider>
      <Router>
            <Navbar/>
            <Createexpensecompo/>
            <br/>
            {/* <Route path="/" Component={ExpenseList}/>
            <Route path="/edit/:id" Component={ExpenseList}/> */}
            {/* <Route path="/create" element={<CreateExpenseComponent/>}/> */}
            {/* <Route path="/user" Component={ExpenseList}/> */}
      </Router>
    </ChakraProvider>
  )
}

export default App
