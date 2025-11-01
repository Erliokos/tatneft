# Tatneft Weather Widget

[![CI](https://github.com/USERNAME/tatneft/actions/workflows/ci.yml/badge.svg)](https://github.com/USERNAME/tatneft/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Приложение для отображения погодных данных с интерактивными графиками температуры в реальном времени.

## 🚀 Возможности

- **Три независимых виджета** для одновременного мониторинга погоды в разных городах
- **Интерактивные графики** с использованием Plotly.js
- **Гибкий выбор периода** отображения данных (6ч, 12ч, 24ч, 72ч, 168ч)
- **Автосохранение выбранных городов** в localStorage
- **Адаптивный дизайн** для различных размеров экрана
- **Выбор из 200+ столиц мира**
- **Отображение архивных данных** за последние 7 дней

## 🛠️ Технологии

- **React 19** — UI библиотека
- **TypeScript** — типизация
- **Styled Components 6** — стилизация
- **React Query (TanStack Query) 5** — управление состоянием сервера
- **Axios** — HTTP клиент
- **Plotly.js** — графики
- **Vite** — сборщик
- **ESLint** — линтер

## 📦 Установка

Убедитесь, что у вас установлен Node.js версии 18 или выше.

```bash
# Клонируйте репозиторий
git clone <repository-url>

# Перейдите в директорию проекта
cd tatneft

# Установите зависимости
npm install
```

## 🏃 Запуск

```bash
# Режим разработки
npm run dev

# Сборка для продакшена
npm run build

# Превью собранного приложения
npm run preview

# Проверка кода линтером
npm run lint
```

Приложение будет доступно по адресу: `http://localhost:3000`

## 📖 Использование

1. Выберите город из списка или введите название вручную
2. Выберите период отображения данных (6, 12, 24, 72 или 168 часов)
3. Наблюдайте за графиком температуры в реальном времени

Данные автоматически сохраняются для каждого виджета отдельно.

## 🌐 API

Приложение использует бесплатные API:
- **Open-Meteo Geocoding API** — поиск координат по названию города
- **Open-Meteo Archive API** — архивные метеорологические данные

## 📁 Структура проекта

```
src/
├── api/              # API запросы
├── components/       # React компоненты
│   └── WeathersWidget/
│       ├── components/   # Подкомпоненты виджета
│       ├── hooks/        # Локальные хуки
│       ├── constants.ts  # Константы
│       ├── Styled.ts     # Стилизованные компоненты
│       └── WeathersWidget.tsx
├── hooks/            # Глобальные хуки
├── types/            # TypeScript типы
├── theme.ts          # Тема приложения
├── globalStyle.ts    # Глобальные стили
└── main.tsx          # Точка входа
```

## 🎨 Кастомизация

Тема приложения настроена в `src/theme.ts`. Вы можете изменить:
- Цветовую палитру
- Размеры шрифтов
- Отступы и размеры
- Breakpoints для адаптивности

## 📝 Скрипты

- `npm run dev` — запуск dev сервера на порту 3000
- `npm run build` — сборка production версии
- `npm run preview` — предпросмотр собранного приложения
- `npm run lint` — проверка кода линтером
- `npm run format` — автоматическое форматирование кода с помощью Prettier
- `npm run format:check` — проверка форматирования кода без изменений

## 🔒 Требования

- Node.js 18+
- npm или yarn

## 🔄 CI/CD

Проект настроен с GitHub Actions для автоматической проверки качества кода:

- **CI workflow** — запускается при push и PR на ветки `main` и `develop`
  - Проверка линтера (ESLint)
  - Проверка типов TypeScript
  - Проверка форматирования (Prettier)
  - Сборка проекта

- **PR Checks** — дополнительные проверки для Pull Requests
  - Полный набор тестов
  - Проверка размера бандла

## 📄 Лицензия

MIT

## 👤 Автор

Разработано для тестового задания
