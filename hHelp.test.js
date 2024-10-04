const { Telegraf, session } = require('telegraf');
const {hHelp} = require('./bot2.js'); // Импортируем функцию hHelp из модуля'); // Импортируем функцию hHelp из модуля
//import {Telegraf} from 'telegraf';
//import hHelp from './bot2';
 


describe('hHelp', function() {
    it('следует ответить сообщением о помощи', function() {
        // Создаем mock объект ctx с нужными свойствами
        const ctx = {
            reply: jest.fn() // Mock метода reply
        };

        // Вызываем функцию hHelp с mock объектом ctx
        hHelp(ctx);

        // Ожидаемая строка справки
        const expectedReply = 
		'/start - начало работы, в т.ч.  регистрация и авторизация.\n'+
'На вопросы типа Yes/No можно отвечать полным словом или кратко(yes, no, y, n). Ввод не чувствителен к регистру\n'+
'/reg - реггистрация\n'+
'/i - информация о регистрации и авторизации\n'+
'/id - идентификатор пользователя, с которым он зарегистрирован в телеграм\n'+
'/ui - о пользователе\n'+
'/bi - о боте\n'+
'/da - деавторизация\n'+
'/moment - текущие дату и время при помощи библиотеки moment.js\n'+
'/help или /h - эта справка\n ';
 
        // Проверяем, что функция reply была вызвана с правильным справочным сообщением
        expect(ctx.reply).toHaveBeenCalledWith(expectedReply);
    });
});

/*
импортируем функцию hHelp из модуля и создаем mock объект ctx без дополнительных свойств. Затем мы вызываем функцию hHelp с mock объектом ctx. После этого мы проверяем, что функция reply была вызвана с правильным справочным сообщением.const { Telegraf, session } = require('telegraf')
*/
