import { useStoredCity } from 'hooks/useStorageCity'
import { useWeatherQuery } from 'hooks/useWeatherQuery'
import { useMemo, useState, type ChangeEvent } from 'react'
import Plot from 'react-plotly.js'
import styled from 'styled-components'
import { CAPITALS_LIST, PERIOD_OPTIONS } from './constants'





type Point = { t: string; v: number }

type WeatherProps = {
  id: string
  defaultCity: string
}

export function Weather({ id, defaultCity }: WeatherProps) {
  const { city: memoryCity, updateCity } = useStoredCity(id)

  const [city, setCity] = useState<string>(memoryCity || defaultCity)
  const [periodHours, setPeriodHours] = useState<number>(24)

  const { data, isLoading, isError, error } = useWeatherQuery(city)

  const hourlyUnits = data?.hourly_units

  const series = useMemo<Point[]>(() => {
    const times = data?.hourly.time ?? []
    const temps = data?.hourly.temperature_2m ?? []
    if (!times.length || !temps.length) return [] as Point[]

    const sliceStart = Math.max(0, times.length - periodHours)
    return times
      .slice(sliceStart)
      .map((t, idx) => ({ t, v: temps[sliceStart + idx] }))
  }, [data, periodHours])

  const chart = useMemo(() => {
    if (!series.length) return null

    const x = series.map(p => p.t)
    const y = series.map(p => p.v)

    const units = hourlyUnits?.temperature_2m ?? '°C'

    return (
      <Plot
        data={[
          {
            x,
            y,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { size: 4, color: '#2f6feb' },
            line: { color: '#2f6feb', width: 2 },
            hovertemplate: '%{x}<br>%{y:.1f} ' + units + '<extra></extra>'
          }
        ]}
        layout={{
          autosize: true,
          height: 360,
          margin: { l: 56, r: 20, t: 16, b: 48 },
          xaxis: {
            title: { text: 'Время' },
            type: 'date',
            tickformat: '%d.%m %H:%M',
            showgrid: true,
            gridcolor: '#f0f0f0'
          },
          yaxis: {
            title: { text: `Температура (${units})` },
            zeroline: false,
            showgrid: true,
            gridcolor: '#f0f0f0'
          },
          showlegend: false
        }}
        config={{ responsive: true, displayModeBar: false }}
        style={{ width: '100%' }}
      />
    )
  }, [series, hourlyUnits])

  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
    updateCity(e.target.value)
  }

  return (
    <Container>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          flexWrap: 'wrap'
        }}
      >
        <label htmlFor="city-input" style={{ fontWeight: 600 }}>
          Город:
        </label>
        <Input
          id="city-input"
          list="city-list"
          value={city}
          onChange={handleChangeCity}
          placeholder="Выберите или введите город"
          style={{
            padding: '8px 10px',
            borderRadius: 8,
            border: '1px solid #ddd',
            minWidth: 240
          }}
        />
        <datalist id="city-list">
          {CAPITALS_LIST.map(c => (
            <option key={c} value={c} />
          ))}
        </datalist>

        {isLoading && <span style={{ color: '#666' }}>Загрузка...</span>}
        {isError && (
          <span style={{ color: '#d33' }}>
            {(error as Error)?.message || 'Ошибка загрузки'}
          </span>
        )}
      </header>

      <section style={{ overflowX: 'auto' }}>
        {chart || (
          <div style={{ padding: 24, color: '#666' }}>
            Нет данных для отображения
          </div>
        )}
      </section>

      <Footer
      >
        <PeriodSpan>Период:</PeriodSpan>
        {PERIOD_OPTIONS.map(h => {

          return (
            <PeriodButton
              $isSelect={h === periodHours}
              key={h}
              onClick={() => setPeriodHours(h)}
            >
              {h}ч
            </PeriodButton>
          )
        })}
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  padding: ${({ theme }) => theme.space[5]};
  background-color: ${({ theme }) => theme.colors.secondary[200]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
`
const Input = styled.input`
  padding: '8px 10px';
  border-radius: 8;
  min-width: 240;
`
const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`
const PeriodSpan = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`
const PeriodButton = styled.button<{ $isSelect: boolean }>`
  padding: ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme }) => theme.space[1]};
  background-color: ${({ $isSelect: active, theme }) =>
    active ? theme.colors.primary[400] : theme.colors.white};
  color: ${({ $isSelect: active, theme }) =>
    active ? theme.colors.primary[100] : theme.colors.black};
  cursor: pointer;
`
