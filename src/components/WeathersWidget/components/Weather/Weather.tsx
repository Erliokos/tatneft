import { useSeries } from 'components/WeathersWidget/hooks/useSeries'
import { Block, ChartContainer, Container, EmptyContainer, ErrorSpan, Header, Span } from 'components/WeathersWidget/Styled'
import { useStoredCity } from 'hooks/useStorageCity'
import { useWeatherQuery } from 'hooks/useWeatherQuery'
import { useState } from 'react'
import { Chart } from '../Chart/Chart'
import { CitySelector } from '../CitySelector/CitySelector'
import { PeriodSelector } from '../PeriodSelector/PeriodSelector'
import { SkeletonChart } from '../SkeletonChart/SkeletonChart'


type WeatherProps = {
  id: string
  defaultCity: string
}

export function Weather({ id, defaultCity }: WeatherProps) {
  const { city: memoryCity, updateCity } = useStoredCity(id)
  const [city, setCity] = useState(memoryCity || defaultCity)
  const [periodHours, setPeriodHours] = useState(24)
  const { data, isLoading, isError, error } = useWeatherQuery(city)

  const series = useSeries(data, periodHours)
  const units = data?.hourly_units?.temperature_2m ?? '°C'

  return (
    <Container>
      <Header>
        <CitySelector
          city={city}
          onChange={val => {
            setCity(val)
            updateCity(val)
          }}
        />
        {isLoading && <Span>Загрузка...</Span>}
        {isError && (
          <ErrorSpan>
            {(error as Error)?.message || 'Ошибка загрузки'}
          </ErrorSpan>
        )}
      </Header>
      <Block>
        <ChartContainer>
          {isLoading ? (
            <SkeletonChart />
          ) : series.length ? (
            <Chart series={series} units={units} />
          ) : (
            <EmptyContainer>
              <ErrorSpan>Нет данных для отображения</ErrorSpan>
            </EmptyContainer>
          )}
        </ChartContainer>
        {!!series.length && <PeriodSelector value={periodHours} onChange={setPeriodHours} />}
      </Block>
    </Container>
  )
}
