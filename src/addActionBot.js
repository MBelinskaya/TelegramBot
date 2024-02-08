import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const addActionBot = (name, src, content1) => {
    bot.action(name, async(ctx) => {
        try {
        await ctx.answerCbQuery() //убрать часы с кнопки
        if (src !== false) {
            await ctx.replyWithPhoto({source: src})
        }
        await ctx.replyWithHTML(content1, { disable_web_page_preview: true }) // не будет изображения превью ссылки
    } catch (e) {
        ctx.reply(content.errorMessage)
    }
    })
};

export default addActionBot;