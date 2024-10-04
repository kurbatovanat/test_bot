const { hRegInfo } = require('./bot2.js');
const { Telegraf } = require('telegraf');

describe('hRegInfo', function() {
    it('Сообщает информацию по регистрации и авторизации в ответ на получение команды /i', function() {
        // mock объекта ctx
        const ctx = {
            session: {
                authorized: true,
                registred: true
            },
            reply: jest.fn() // Mock функции reply
        };

        // Вызываем функцию hRegInfo с mock объектом ctx
        hRegInfo(ctx);

        // Проверяем, что функция reply был вызван с заданным сообщением
        expect(ctx.reply).toHaveBeenCalledWith('registered=true authorized=true');
    });
});

