const { hMoment } = require('./bot2.js');
const moment = require('moment');

describe('hMoment', function() {
    it('Текущие дата и время', function() {
        // Создаем mock для объекта ctx
        const ctx = {
            reply: jest.fn() // Mock для reply
        };

        // Сохраняем текущую дату и время в формате 'DD.MM.YYYY HH:mm:ss'
        const currentDateTime = moment().format('DD.MM.YYYY HH:mm:ss');

        // Вызываем функцию hMoment с mock объектом ctx
        hMoment( ctx);

        // Проверяем, что функция reply была вызвана с правильной текущей датой и временем
        expect(ctx.reply).toHaveBeenCalledWith(currentDateTime);
    });
});


