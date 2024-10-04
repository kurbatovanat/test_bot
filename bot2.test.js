// bot2.test.js

const { Telegraf, session } = require('telegraf');
const { bot } = require('./bot2.js'); // Импортируем функцию hHelp из модуля'); // Импортируем функцию hHelp из модуля
//
//import {Telegraf} from 'telegraf';
//import bot from './bot2';

test('Bot instance is created successfully', () => {
  expect(bot).toBeInstanceOf(Telegraf);              });