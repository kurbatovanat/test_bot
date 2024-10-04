const { hNo } = require('./bot2.js');

describe('hNo', () => {
    let ctx;

    beforeEach(() => {
        ctx = {
            reply: jest.fn(() => { }),
            session: {
                state: 'CancelRegistration'
            }
        };
    });

    test('Отказ от регистрации', () => {
        hNo(ctx);

        expect(ctx.reply).toHaveBeenCalled();
        expect(ctx.session.state).toBe('CancelRegistration');
    });
});

