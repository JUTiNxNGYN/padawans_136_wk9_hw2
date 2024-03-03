import Container from 'react-bootstrap/Container'

import Header from './components/Header'
import Body from './components/Body'
import Car from "./components/Car"
import { Posts } from './components/Posts'

export default function App() {

 return (

  <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Body>
      <Car />
      </Body>
  </Container>
 )   
}

