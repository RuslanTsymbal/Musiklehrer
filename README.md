## Что для этого нужно?

Установить [NodeJS](https://nodejs.org/en/)  
Плагин для редактора [Editorconfig](http://editorconfig.org)  

## Старт проекта

В консоле перейти в папку с проектом и установить зависимости

```bash
npm install
npm install -g gulp-cli (если не установлен)
```

После этого используем доступные команды

## Доступные команды

`gulp` - Запуск проекта для разработки, сервер и слежение за файлами  
`gulp build` - сборка проекта для заливки на продакшн  
`gulp sprite` - сборка спрайта  

## Структура проекта

```
start-frontend-project/
├── /build/                # Результат сборки. (Никогда не редактируется).
├── /node_modules/         # Node modules. (Никогда не редактируется).
├── /src/                  # Исходные файлы.
│   ├── /_include/         # HTML разметка которая вставляется в другие файлы.
│   ├── /_load-scripts/    # Скрипты из этой папки подключаются автоматически.
│   ├── /_load-styles/     # Стили из этой папки подключаются автоматически.
│   ├── /fonts/            # Шрифты.
│   ├── /images/           # Исходные изображения.
│   │   └── /sprite/       # Изображения для спрайтов.
│   ├── /scripts/          # Скрипты проекта.
│   ├── /sass/             # Структуру папки смотрите ниже.
└── .editorconfig          # Настройка редактора.
└── .gitignore
└── gulpfile.js            # Конфигурация для Gulp.
└── package.json           # Пакеты для NPM.
```

## Структура папки sass

```
sass/
├── /block/                # Стили для повторяющихся блоков.
├── /elements/             # Стили для элементов.
├── /pages/                # Стили для страниц.
└── _base.scss             # Базовые стили. Box sizing.
└── _mixins.scss           # Миксины.
└── _sprite.scss           # Спрайты. (Никогда не редактируется).
└── _typography.scss       # Типографика проекта.
└── _variables.scss        # Переменные.
└── main.scss              # Компилируемый файл.
```

## Полезные ссылки

1. [Шпаргалка по работе с консолью](https://github.com/nicothin/web-development/tree/master/bash)
2. [Консоль для Windows](http://nicothin.pro/page/console-windows)
3. [Шпаргалка по Git](https://github.com/nicothin/web-development/tree/master/git)

## Хост
https://www.zzz.com.ua/

ryssslan
0635344117RRRr
