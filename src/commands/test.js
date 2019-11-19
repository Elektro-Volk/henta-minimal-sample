export default class TestCommand {
  name = 'тест';
  description = 'привет, мир';

  handler(ctx) {
    ctx.answer(`Бот работает на HENTA ${ctx.henta.version}!`);
  }
}
