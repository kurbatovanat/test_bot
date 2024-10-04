const { Telegraf, session } = require('telegraf');
const { hDeAuth } = require('./bot2.js');

describe('hDeAuth', function() {
    it('следует ли деавторизовать пользователя при получении команды /da', function() {
        // Создаем mock объект ctx
        const ctx = {
            session: {
                authorized: true,
                registred: true
            },
            reply: jest.fn() // Mock функции reply
        };

        // Вызываем функцию hDeAuth с mock объектом ctx
        hDeAuth(ctx);

        // Проверяем, что авторизация была сброшена на false
        expect(ctx.session.authorized).toBe(false);

        // Проверяем, что функция reply была вызвана с правильным сообщением
        expect(ctx.reply).toHaveBeenCalledWith('Вы деавторизованы!\n registered=true authorized=false');
    });
});

 