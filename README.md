# No to Terrorism Website

A informational website aimed at providing resources and raising awareness about terrorism prevention.

## Features

- Information about recognizing signs of terrorism
- Guidelines on what to do during terrorist threats
- Educational resources about terrorism prevention
- Emergency contact information
- Light/Dark theme toggle

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Responsive design for all devices

## Purpose

This website serves as an educational resource to help people understand terrorism, recognize warning signs, and know what actions to take in threatening situations. The goal is to create a more informed public that can contribute to preventing terrorist acts.

## Emergency Contact

In case of emergency, call the unified emergency service: 112

## Описание проекта

Этот проект представляет собой простой информационный веб-сайт, содержащий материалы о противодействии терроризму. Сайт включает в себя следующие разделы:
- Главная страница с общей информацией
- Страница "О нас" с описанием миссии и направлениями деятельности
- Информация о признаках подготовки террористического акта
- Рекомендации по безопасности

## История проекта

Проект начат в 2023 году как информационный ресурс для повышения осведомленности граждан о мерах противодействия терроризму. Первоначальная версия сайта была создана с использованием базовых технологий веб-разработки для обеспечения максимальной доступности контента.

## Структура проекта

```
├── index.html          # Главная страница
├── about.html          # Страница "О нас"
├── styles.css          # Стили для всего сайта
├── .gitignore          # Исключения для Git
├── images/             # Директория с изображениями
│   └── generate.html   # Генератор плейсхолдеров для изображений
└── README.md           # Документация проекта
```

## Технологии

- HTML5
- CSS3
- Встроенные SVG-изображения

## Установка и запуск

1. Клонируйте репозиторий:

```
git clone https://github.com/theJorDea/No-To-Terrorism-Website.git
```

2. Откройте файл index.html в браузере.

## Особенности

- Адаптивный дизайн
- Вся необходимая информация доступна сразу на сайте
- Оптимизированные изображения через SVG
- Современный дизайн с использованием градиентов

## Настройка Git для Windows при работе с кириллицей

Если у вас возникают проблемы с отображением кириллических символов в git log или коммитах, выполните следующие команды:

```
git config --global core.quotepath off
git config --global i18n.commitencoding utf-8
git config --global i18n.logoutputencoding utf-8
git config --global core.precomposeunicode true
```

Для PowerShell также может потребоваться настройка кодировки консоли:

```
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
chcp 65001
```

Обратите внимание, что при работе с кириллицей в Windows могут возникать проблемы с отображением первой буквы в сообщениях коммитов. Это связано с особенностями работы PowerShell и Git в Windows.

## Лицензия

Проект распространяется под открытой лицензией. Вы можете свободно использовать, модифицировать и распространять его.

## Контакты

Если у вас есть вопросы или предложения по улучшению сайта, свяжитесь с нами.

## Необходимые изображения

Для полноценной работы сайта необходимо скачать следующие изображения и поместить их в папку `images/`:

1. `hero-bg.jpg` - фоновое изображение для главной страницы
2. `about-hero.jpg` - фоновое изображение для страницы "О нас"
3. `terrorism-prevention.jpg` - изображение для раздела "Что такое терроризм?"
4. `safety.jpg` - изображение для раздела "Что делать при угрозе"
5. `mission.jpg` - изображение для раздела "Наша миссия"
6. `activities.jpg` - изображение для раздела "Направления деятельности"

## Источники изображений

Вы можете использовать бесплатные изображения с следующих сайтов:
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)

## Примечание

Вместо загрузки изображений можно также использовать плейсхолдеры, например:
- https://placehold.co/600x400?text=Безопасность
- https://placehold.co/800x400?text=Профилактика+терроризма
