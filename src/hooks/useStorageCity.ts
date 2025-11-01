import { useState, useEffect, useCallback } from 'react'

export function useStoredCity(id: string) {
  const storageKey = `city_${id}`

  const [city, setCity] = useState<string>(() => {
    try {
      return localStorage.getItem(storageKey) || ''
    } catch {
      return ''
    }
  })

  useEffect(() => {
    try {
      if (city) {
        localStorage.setItem(storageKey, city)
      } else {
        localStorage.removeItem(storageKey)
      }
    } catch (err) {
      console.error('Ошибка при работе с localStorage:', err)
    }
  }, [city, storageKey])

  const updateCity = useCallback((newCity: string) => {
    setCity(newCity)
  }, [])

  return { city, updateCity }
}
