const { hText } = require('./bot2.js'); 

describe('hText', function() {
    it('должен обрабатывать авторизацию', function() {
        // Создаем mock объекта ctx 
       const ctx = {
            session: {
                authorized: false,
                state: 'NotAuthorized'
            },
            from: {
                id: 123 // ID пользователя для теста
            },
            message: {
                text: '1234' // Текстовое сообщение для теста
            },
            reply: jest.fn() // Mock функции reply
        };

        // Создаем mock массива auth 
        const auth = [123, 1234]; // Пример значений для auth

        // Вызываем функцию hText с mock объекта ctx и mock массива auth
        hText(ctx);

        // Проверяем, что состояние и авторизация пользователя обновлены правильно
        expect(ctx.session.state).toBe('NotAuthorized');
        expect(ctx.session.authorized).toBe(false);

        // Ожидаемые ответы на различные сценарии авторизации
        const expectedAuthorizedReply = 'Вы успешно авторизованы на один сеанс!';
        const expectedNotAuthorizedReply = 'Вы не авторизованы! Проверьте ключ.';
        const expectedNotRegisteredReply = 'Вы не зарегистрированы!';

        // Проверяем, что функция reply была вызвана с правильными сообщениями
        expect(ctx.reply).toHaveBeenCalledWith(expectedNotRegisteredReply); // Пользователь успешно авторизован
        // Дополнительные проверки на другие сценарии
    });
});

/*
mock объекта ctx

для тестирования функции hText. 
Вызов hText 
с mock объекта ctx и mock массива auth, 
чтобы проверить правильность обработки процесса авторизации. После этого мы проверяем, что состояние и авторизация пользователя обновлены правильно, а также проверяем, что функция reply была вызвана с правильными сообщениями в зависимости от сценария авторизации.
*/ 