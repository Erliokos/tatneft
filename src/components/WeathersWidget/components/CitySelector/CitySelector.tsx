import { CAPITALS_LIST } from "components/WeathersWidget/constants"
import { CityContainer, Input, Text } from "components/WeathersWidget/Styled"
import type { ChangeEvent } from "react"



type CitySelectorProps = {
  city: string
  onChange: (value: string) => void
}

export const CitySelector = ({ city, onChange }: CitySelectorProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <CityContainer>
      <Text>
        Город:
      </Text>
      <Input
        id="city-input"
        list="city-list"
        value={city}
        onChange={handleChange}
        placeholder="Выберите или введите город"
      />
      <datalist id="city-list">
        {CAPITALS_LIST.map(c => (
          <option key={c} value={c} />
        ))}
      </datalist>
    </CityContainer>
  )
}
