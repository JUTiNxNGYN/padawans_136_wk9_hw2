import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import { Posts } from "./Posts"

export default function Body({ children }) {

  return (
    <Container>
        <Stack direction='horizontal'>
            <Container>
            { children }
            </Container>
        </Stack>
    </Container>
  )
}
