import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Welcome to our ReactJSHW1</Navbar.Brand>
    </Container>
  </Navbar>
  )
}
