import styled from "styled-components"
import { Weather } from "./components/Weather/Weather"



export function WeathersWidget() {
  return (
    <Container>
      <Weather id="1" defaultCity="" />
      <Weather id="2" defaultCity="" />
      <Weather id="3" defaultCity="" />
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary[200]};
`

