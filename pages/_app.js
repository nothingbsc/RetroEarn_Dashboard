import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Dashboard from './dashboard'

function MyApp() {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  )
}

export default MyApp
