import { useMemo } from 'react'
import type { WeatherData } from 'types/weather'

type Point = { t: string; v: number }

export function useSeries(
  data: WeatherData | undefined,
  periodHours: number
): Point[] {
  return useMemo(() => {
    const times = data?.hourly?.time ?? []
    const temps = data?.hourly?.temperature_2m ?? []
    if (!times.length || !temps.length) return []

    const sliceStart = Math.max(0, times.length - periodHours)
    return times.slice(sliceStart).map((t, idx) => ({
      t,
      v: temps[sliceStart + idx],
    }))
  }, [data, periodHours])
}
