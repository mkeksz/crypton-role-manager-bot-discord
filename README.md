# Discord бот для контроля ролей подписчиков Crypton Academy

## Подготовка к запуску

**Требуется Node.js версия 16.6.0 или новее.**

Пропишите требуемые переменные среды для настройки бота. Или просто измените название файла `.env.example` на `.env` и пропишите там требуемые значения. Глобальные переменные будут иметь приоритет перед переменными в `.env`

**Установка зависимостей**

`npm install`

**Сборка проекта**

`npm run build`

**Запуск бота**

`npm run start`

## Регистрация бота

Перейдите на страницу приложений Discord (https://discord.com/developers/applications)

Нажмите "New Application", введите название приложения и нажмите "Create".

На странице приложения перейдите во вкладку "Bot" и создайте бота.

Во вкладке "Bot" скопируйте токен бота находящийся под полем "Token". Этот токен потребуется вставить в соответствующее поле в файле `.env`. **Любой, кто получит доступ к этому токену, сможет управлять вашим ботом!**

Если вы хотите, что бы только вы могли добавлять бота на сервера Discord, то уберите ползунок в поле "Public Bot"



### Как добавить бота на сервер Discord?

Перейдите во вкладку "OAuth2" на странице вашего приложения.

В поле "Scopes" выберите следующие параметры: bot, applications.commands

В поле "Bot Permissions" выберите следующие параметры: Manage Roles

Теперь в поле "Scopes" скопируйте сгенерированную ссылку. Эта будет ваша пригласительная ссылка для добавления бота на сервер Discord. **Если не выбрать требуемые параметры, то сгенерируется неверная ссылка и бот не будет работать. Тогда потребуется заново добавить бота на сервер по новой ссылке с требуемыми параметрами.**

Теперь перейдите по сгенерированной ссылке и выберите сервер в который требуется добавить бота.

### Как изменить имя, описание и иконку бота?

Перейдите во вкладку "General Information". Здесь вы можете изменить имя приложения, иконку приложения и описание бота.

Перейдите во вкладку "Bot". Здесь вы можете изменить аватарку и username бота.
