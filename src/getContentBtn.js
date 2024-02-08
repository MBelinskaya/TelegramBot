import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const getContentBtn = (name, backFloor, content) => {
	bot.action(name, async(ctx) => {
    try {
    await ctx.answerCbQuery(); 
    await ctx.replyWithMediaGroup(content)
    await ctx.replyWithHTML('<b>Выбери, что делаем:</b>', backFloor)
} catch (e) {
    ctx.reply(content.errorMessage)
}})
};

export default getContentBtn;