const { Telegraf } = require('telegraf');
const { hReg } = require('./bot2.js');

test('Команда регистрации:  ', () => {
    const ctx = {
        session: { registred: false },
        from: { id: 5358415123, first_name: 'user', username: 'kk-3@mail.ru' },
        reply: jest.fn()
    };

    hReg(ctx);

    expect(ctx.reply).toHaveBeenCalledWith('Запрос на регистрацию телеграм-пользователя kk-3@mail.ru с именем user и userid: 5358415123. Введите команду /start');
});

test('Пользователь зарегистрирован:  ', () => {
    const ctx = {  
        session: { registred: true },
        reply: jest.fn()
    };

    hReg(ctx);

    expect(ctx.reply).toHaveBeenCalledWith('Вы уже зарегистрированы');
});