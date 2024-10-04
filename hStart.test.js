/*
hStart(ctx) 
 
Тестируем три различных сценария:
1. Пользователь не зарегистрирован.
2. Пользователь зарегистрирован, но не авторизован.
3. Пользователь зарегистрирован и авторизован.
*/

const { Telegraf, session } = require('telegraf');
const { hStart } = require('./bot2.js');

describe('функция hStart', () => {
    let ctx;

    beforeEach(() => {
        ctx = {
            reply: jest.fn(),
            session: {}
        };
    });

    test('Вариант: Пользователь не зарегистрирован', () => {
        hStart(ctx);

        expect(ctx.reply).toHaveBeenCalledWith('Вы не зарегистрированы! Хотите зарегистрироваться?  (yes/no)');
        expect(ctx.session.state).toBe('WaitRegistration');
    });

    test('Вариант: Пользователь зарегистрирован, но не авторизован', () => {
        ctx.session.registred = true;
        hStart(ctx);

        expect(ctx.reply).toHaveBeenCalledWith('Вы зарегистрированы, но не авторизованы! Хотите авторизоваться?  (yes/no)');
        expect(ctx.session.state).toBe('WaitAuthorization');
    });

    test('Вариант: Пользователь зарегистрирован и авторизован', () => {
        ctx.session.registred = true;
        ctx.session.authorized = true;
        ctx.from = { first_name: 'user' };
        ctx.botInfo = { username: 'bot' };
        hStart(ctx);

        expect(ctx.reply).toHaveBeenCalledWith('Здравствуйте, user! Я bot. Введите команду:');
    });
});
