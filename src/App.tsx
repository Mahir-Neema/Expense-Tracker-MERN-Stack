import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import Createexpensecompo from './components/Createexpensecompo'
import Createusercompo from './components/Createusercompo'
import Expenseslist from './components/Expenseslist'

function App() {

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route path="/" element={<Expenseslist/>}/>
            <Route path="/create" element={<Createexpensecompo/>}/>
            {/* <Route path="/edit/:id" element={ExpenseList}/>  */}
            <Route path="/user" element={<Createusercompo/>}/>

          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
