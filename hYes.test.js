//2 случая: ctx.session.state = 'WaitRegistration' и ...= 'WaitAuthorization'. 

const { hYes } = require('./bot2.js');
const fs = require('fs');

describe('hYes:', () => {
    let ctx;

    beforeEach(() => {
        ctx = {
            from: {
                id: 6789823456,
                first_name: 'user1'
            },
            session: {
                state: 'WaitRegistration'
            },
            reply: jest.fn()
        };
        fs.appendFileSync = jest.fn(); // Mocking fs.appendFileSync
    });

    test('Test: Регистрация успешно завершена', () => {
        hYes(ctx);

        expect(ctx.session.state).toBe('Registred');
        expect(ctx.session.registred).toBe(true);
        expect(fs.appendFileSync).toHaveBeenCalled();
        expect(ctx.reply).toHaveBeenCalledWith(expect.stringContaining('Регистрация успешно завершена. Ваш авторизационный ключ:'));
    });

    test('Test: Ожидание ключа авторизации', () => {
        ctx.session.state = 'WaitAuthorization';
        
        hYes(ctx);

        expect(ctx.reply).toHaveBeenCalledWith('Введите ключ авторизации:');
    });
});


