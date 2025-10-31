import axios from "axios";
import type { WeatherData } from "../types/weather";

interface GeoResult {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
}

interface GeoResponse {
  results: GeoResult[];
}

export async function getWeatherByCity(cityName: string): Promise<WeatherData> {

  const geoRes = await axios.get<GeoResponse>("https://geocoding-api.open-meteo.com/v1/search", {
    params: { name: cityName, count: 1 },
  });

  const results = geoRes.data.results;
  if (!results || results.length === 0) {
    throw new Error("Город не найден");
  }

  const { latitude, longitude } = results[0];

  const now = new Date();
  const end = now.toISOString().split("T")[0];
  const start = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const weatherRes = await axios.get<WeatherData>("https://archive-api.open-meteo.com/v1/archive", {
    params: {
      latitude,
      longitude,
      start_date: start,
      end_date: end,
      hourly: "temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m",
      timezone: "auto",
    },
  });

  return weatherRes.data;
}
