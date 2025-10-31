import { useWeatherQuery } from "../../hooks/useWeatherQuery"


export function Weather() {

  const { data } = useWeatherQuery("Moscow")
  return <div>{data?.hourly.time}</div>
}

