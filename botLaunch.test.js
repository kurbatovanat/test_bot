const { Telegraf, session } = require('telegraf');
const { bot } = require('./bot2.js'); // ����������� ������� hHelp �� ������'); // ����������� ������� hHelp �� ������
//
//import {Telegraf} from 'telegraf';
//import bot from './bot2';
 
describe('Bot launch', () => {
    it('should launch the bot', () => {
        jest.spyOn(bot, 'launch').mockImplementation(() => {});
        bot.launch();
        expect(bot.launch).toHaveBeenCalled();
    });
});
	