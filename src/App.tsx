import styled from "styled-components"
import { Weather } from "./components/Weather/Weather"


function App() {



  return (
    <>
      <Container>
        <Weather />
      </Container>
    </>
  )
}

export default App


const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`
