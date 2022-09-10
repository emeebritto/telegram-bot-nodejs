const { Telegraf } = require('telegraf');
const actions = require("./actions");
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {return});
bot.hears(/hi|hello/i, actions.greeting);
bot.hears(/download (.+)/i, actions.downloadVideo);
bot.on('text', actions.text);
bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
