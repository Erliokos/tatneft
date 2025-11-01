import { Weather } from './components/Weather/Weather'
import { CAPITALS } from './constants'
import { MainContainer } from './Styled'

export function WeathersWidget() {
  return (
    <MainContainer>
      <Weather id="1" defaultCity={CAPITALS.Moscow} />
      <Weather id="2" defaultCity={CAPITALS.Washington} />
      <Weather id="3" defaultCity={CAPITALS.London} />
    </MainContainer>
  )
}
