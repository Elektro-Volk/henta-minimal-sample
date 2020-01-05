# Henta Minimal Sample
Чистый шаблон для того, чтобы творить!

## Используются плагины:
* [common/bot](https://github.com/StandartHentaPlugins/bot) - основа бота.
* [common/botcmd](https://github.com/StandartHentaPlugins/botcmd) - система команд.

## Установка
```
git clone https://github.com/elektro-volk/henta-minimal-sample.git mybot
cd mybot
```
Если у вас YARN (**Рекомендуется**)
```
yarn run installbot
yarn start
```
Если у вас NPM
```
npm run installbot
npm start
```
## Сервисный режим
Сервисный режим нужен в тех случаях, когда запуск HENTA невозможен из-за повреждённых плагинов, но нужен доступ к CLI. Для этого бот запускается с флагом '--service'.