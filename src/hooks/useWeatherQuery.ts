import { useQuery } from "@tanstack/react-query";
import { getWeatherByCity } from "../api/getWeatherByCity";

export function useWeatherQuery(cityName: string) {
  return useQuery({
    queryKey: ["weather", cityName],
    queryFn: () => getWeatherByCity(cityName),
    enabled: !!cityName,
    staleTime: 1000 * 60 * 10,
  });
}
