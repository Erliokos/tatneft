import { PERIOD_OPTIONS } from 'components/WeathersWidget/constants'
import {
  Footer,
  PeriodButton,
  PeriodContainer,
  Span,
} from 'components/WeathersWidget/Styled'
import { getPeriodName } from 'components/WeathersWidget/utils'

type PeriodSelectorProps = {
  value: number
  onChange: (val: number) => void
}

export const PeriodSelector = ({ value, onChange }: PeriodSelectorProps) => (
  <Footer>
    <Span>Период:</Span>
    <PeriodContainer>
      {PERIOD_OPTIONS.map((h) => (
        <PeriodButton
          key={h}
          $isSelect={h === value}
          onClick={() => onChange(h)}
        >
          {getPeriodName(h)}
        </PeriodButton>
      ))}
    </PeriodContainer>
  </Footer>
)
