# Перевозки Днепр (Клон perevoz-dnepr.com.ua)

Точная копия (клон 1 в 1) веб-сайта [perevoz-dnepr.com.ua](https://perevoz-dnepr.com.ua/) с полностью перенесенной версткой, всеми 31 страницами, стилями, скриптами, изображениями и шрифтами.

Проект адаптирован для быстрого деплоя и хостинга на платформе **Railway** (а также Render, Fly.io, Heroku, Docker и VPS).

---

## 🚀 Особенности

- **1 в 1 верстка и контент**:
  - Главная страница (`index.html` / `index.htm`)
  - 30 тематических страниц (`price.htm`, `gruzoperevozki-dnepropetrovsk-gazel.htm`, `evakuator-dnepr.htm`, `uslugi-pereezd.htm`, `kalkulator.htm`, `kontakty.htm` и др.)
  - Все CSS стили (Bootstrap, анимации, адаптивная верстка под мобильные устройства)
  - Все JS плагины (jQuery, Owl Carousel, Revolution Slider, LazyLoad, CountTo)
  - Локальные веб-шрифты (FontAwesome, Magistral, Glyphicons)
  - Все фотоматериалы и графика (автопарк, иконки, логотипы, фоны, галерея)
- **Нормализация путей**:
  - Абсолютные ссылки заменены на относительные пути.
  - Убраны внешние счетчики Google Analytics / Tag Manager, чтобы не искажать аналитику оригинального домена.
- **Node.js Express Backend**:
  - Быстрая раздача статики с поддержкой расширений `.htm` и `.html`.
  - Эмуляция эндпоинтов форм `POST /contact-form.php` и `POST /ajax.php` — данные заявок логируются в консоль сервера.
  - Эндпоинт проверки работоспособности `GET /health` для мониторинга в Railway.

---

## 🛠 Локальный запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите сервер:
```bash
npm start
```

3. Откройте сайт в браузере:
[http://localhost:3000](http://localhost:3000)

---

## ☁ Деплой на Railway

1. Перейдите в [Railway Dashboard](https://railway.com/).
2. Нажмите **"New Project"** -> **"Deploy from GitHub repo"**.
3. Выберите репозиторий: `awraamgitelman-ops/-my-website`.
4. Railway автоматически определит проект как Node.js через `package.json` и запустит команду `npm start`.
5. В разделе **Settings** -> **Networking** сгенерируйте публичный домен (например, `...up.railway.app`).
6. Сайт доступен онлайн!
