const { hMyId } = require('./bot2.js'); 

describe('hMyId', function() {
    it('следует указать в ответе идентификатор пользователя', function() {
        const ctx = {
            from: {
                id: 123 // Устанавливаем ID пользователя для теста
            },
            reply: jest.fn() // Mock функции reply
        };

        // Вызываем функцию hMyId с mock объекта ctx
        hMyId(ctx);

        // Ожидаемая строка с сообщением, содержащим ID пользователя
        const expectedReply = 'Ваш ID: 123'; 

        // Проверяем, что метод reply() был вызванс указанным сообщением
        expect(ctx.reply).toHaveBeenCalledWith(expectedReply);
    });
});
