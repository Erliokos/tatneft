import type { PERIOD_OPTIONS } from './constants'

export const getPeriodName = (
  period: (typeof PERIOD_OPTIONS)[number]
): string => {
  switch (period) {
    case 6:
      return '6 часов'
    case 12:
      return '12 часов'
    case 24:
      return '1 день'
    case 72:
      return '3 дня'
    case 168:
      return 'Неделя'
    default:
      return '6 часов'
  }
}
