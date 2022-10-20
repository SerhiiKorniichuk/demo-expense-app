##  🚀 Завдання

Головним завданням є створення демо додатку, де користувач мав би змогу зареєструвати свій аккаунт за допомогою **Sign Up** форми та згодом увійти в нього через **Sign In** форму. Після успішного входу, користувача повинно автоматично перенаправити на сторінку **Home**, де в мабутньому він мав би змогу зкористатись кнопкою *Logout* для виходу зі свого аккаунту.

<br>

## 📎 Посилання

**Макет**: [Figma](https://www.figma.com/file/hbthFdqeHcPtKLXQIjkeqX/Test-Incode-Finance-2022)

**API документація**: [Swagger](https://incode-backend-dev.herokuapp.com/api/)

<br>

## 👩‍💻 Технічні аспекти

Додаток складається з 2-х сторінок **Auth** та **Home**:

* **Auth** сторінка повинна містити в собі **Sign Up** та **Sign In** форми, які динамічно перемикаються відоповідно до функціоналу.
* **Home** сторінка повинна містити  в собі повідомлення про успішний вхід в додаток та кнопку *Logout*.

<br>

Елементи **Sign Up** блоку з формою:

* Логотип компанії
* Заголовок з назвою форми
* Поле *Full Name*
* Поле *User Name*
* Поле *Email Address*
* Поле *Password*
* Кнопка відправки данних форми
* Текстове поле з кнопкою для переходу на форму ***Sign In***

>Запит для реєстрації аккаунту: [/auth/register](/auth/register)

<br>

Елементи **Sign In** блоку з формою:

* Логотип компанії
* Заголовок з назвою форми
* Поле *Email Address*
* Поле *Password*
* Кнопка відправки данних форми
* Текстове поле з кнопкою для переходу на форму ***Sign Up***

>Запит для входу в аккаунт: [/auth/login](https://incode-backend-dev.herokuapp.com/api/#/auth/AuthController_login)

<br>

Елементи **Home** сторінки:

* Логотип компанії
* Текстовий блок
* Кнопка *Logout*

>Запит для виходу з аккаунту: [/auth/logout](https://incode-backend-dev.herokuapp.com/api/#/auth/AuthController_logout)

<br>

## 📌 Порядок виконання завдання

* Зробіть **fork** данного репозиторія
* Виконайте завдання
* Створіть **pull request** виконаного завдання в данний репозиторій

<br>

## 👀 Результат виконання

>**Sign In Form:**

При натиску на **Sign In** відбувається вхід у додаток.

![INCODE_-_20_October_2022_AdobeExpress](https://user-images.githubusercontent.com/27241911/197068963-b2f53e77-2709-4c91-8338-64802ade1e2e.gif)

Якщо юзера не існує, при сабміті буде вискакувати помилка.

![INCODE_-_21_October_2022_AdobeExpress](https://user-images.githubusercontent.com/27241911/197060148-a4aacd73-0fd2-484c-bf34-8b2568342a58.gif)

Якщо юзер ввів невірний пароль - також буде помилка при сабміті.

![in_pass_err_AdobeExpress](https://user-images.githubusercontent.com/27241911/197061887-a6e6e75e-3941-427b-8703-cda04e3bf545.gif)

Реалізовано кнопку переходу на регістрацію.

![path_to_signUp_AdobeExpress](https://user-images.githubusercontent.com/27241911/197063421-477ec779-0356-45af-84c9-c7ec1e1b845d.gif)


*Також, на верхніх скрінах можна побачити, що кнопка не активна якщо введені не всі поля, і реалізована кнопка, яка показує пароль.*

<br>

>**Sign Up Form:**

Якщо введені усі данні, але паролі не співпадають - буде помилка, що пароль підтвердження не вірний. При цьому цей пароль не буде видалений (його можна подивитись і змінити невірну або пропущену літеру, як то часто буває 🥲

![su_pass_err_AdobeExpress](https://user-images.githubusercontent.com/27241911/197065945-dcaeb2c5-1d7d-4edd-9d85-2b00f6654a05.gif)

Також, помилка вискакує коли пароль вже був кимось створенний раніше...

![su_user_busy_AdobeExpress](https://user-images.githubusercontent.com/27241911/197066894-31fd77c1-f921-4f40-917e-e86a6631e7c4.gif)

... і якщо в ньому присутні пробіли.

![su_space_err_AdobeExpress](https://user-images.githubusercontent.com/27241911/197067912-d79d3233-5ee6-4e75-b565-838d1996cbbf.gif)

При успішній реєстрації, форма переадресується на форму входу, у якій вже прописан щойно створений **username**.

![su_si_AdobeExpress](https://user-images.githubusercontent.com/27241911/197069846-0ec7ddcf-14c7-4094-a5c7-db6d74cc4564.gif)


*І тут також створений функціонал переходу на сторіку авторизації і показу паролей.*

<br>

>**App:**

При натиску на **Log Out** виходить з додатку

![INCODE_-_20_October_2022-3_AdobeExpress](https://user-images.githubusercontent.com/27241911/197036975-3fa6e296-a5b9-4bcc-83b7-f6704adb034d.gif)


P.S.:  Я намагалась зробити однакового розміру гіфки, але щось йшло не так 🙃

### Demo 👇

- [Можливо воно не працює](https://blcts.github.io/demo-expense-app/)

