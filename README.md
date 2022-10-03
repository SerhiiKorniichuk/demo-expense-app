# demo-expense-app

## Main dependency

- Gatsby
- MobX
- Material UI
- Prettier & ESLint

## State management

- `/src/stores` - Root mobx folder
- `/src/stores/store/` - main store
- `/src/stores/errorStore/` - store for managing server and client errors
- `/src/stores/messageStore/` - store for notifications

## SEO management

- `/src/components/SEO/SEO.js` - SEO component
- `/gatsby-config.js` - SEO settings and gatsby modules

## Requirements

- Installed [NodeJS](https://nodejs.org/uk/) v16.13.0

## Environment

- `REACT_APP_API_URL=https://incode-backend-dev.herokuapp.com`

## How to start

- Download dependencies via YARN `yarn`
- To start local build run `yarn start`

## 🚀 Завдання

Головним завданням є створення демо додатку, де користувач мав би змогу зареєструвати свій аккаунт за допомогою **Sign Up** форми та згодом увійти в нього через **Sign In** форму. Після успішного входу, користувача повинно автоматично перенаправити на сторінку **Home**, де в мабутньому він мав би змогу зкористатись кнопкою _Logout_ для виходу зі свого аккаунту.

<br>

## 📎 Посилання

**Макет**: [Figma](https://www.figma.com/file/hbthFdqeHcPtKLXQIjkeqX/Test-Incode-Finance-2022)

**API документація**: [Swagger](https://incode-backend-dev.herokuapp.com/api/)

<br>

## 👩‍💻 Технічні аспекти

Додаток складається з 2-х сторінок **Auth** та **Home**:

- **Auth** сторінка повинна містити в собі **Sign Up** та **Sign In** форми, які динамічно перемикаються відоповідно до функціоналу.
- **Home** сторінка повинна містити в собі повідомлення про успішний вхід в додаток та кнопку _Logout_.

<br>

Елементи **Sign Up** блоку з формою:

- Логотип компанії
- Заголовок з назвою форми
- Поле _Full Name_
- Поле _User Name_
- Поле _Email Address_
- Поле _Password_
- Кнопка відправки данних форми
- Текстове поле з кнопкою для переходу на форму **_Sign In_**

> Запит для реєстрації аккаунту: [/auth/register](/auth/register)

<br>

Елементи **Sign In** блоку з формою:

- Логотип компанії
- Заголовок з назвою форми
- Поле _Email Address_
- Поле _Password_
- Кнопка відправки данних форми
- Текстове поле з кнопкою для переходу на форму **_Sign Up_**

> Запит для входу в аккаунт: [/auth/login](https://incode-backend-dev.herokuapp.com/api/#/auth/AuthController_login)

<br>

Елементи **Home** сторінки:

- Логотип компанії
- Текстовий блок
- Кнопка _Logout_

> Запит для виходу з аккаунту: [/auth/logout](https://incode-backend-dev.herokuapp.com/api/#/auth/AuthController_logout)

<br>

## 📌 Порядок виконання завдання

- Зробіть **fork** данного репозиторія
- Виконайте завдання
- Створіть **pull request** виконаного завдання в данний репозиторій
- Повідомте про виконання завдання
