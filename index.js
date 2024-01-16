const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters')
require('dotenv').config()

const content = require('./const')
const bot = new Telegraf(process.env.BOT_TOKEN)
const buttonContentsStart = Markup.inlineKeyboard([[Markup.button.callback('📋 Принять квартиру самостоятельно', 'btn_1')],[Markup.button.callback('👷 Записаться на приёмку к специалисту', 'btn_2')]]);

bot.help((ctx) => ctx.reply(content.commands))
bot.start((ctx) => ctx.replyWithHTML(`Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'пользователь'}!
<b>Выбери, что делать?</b>`, buttonContentsStart))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.on(message('text' && !'reserve'), (ctx) => ctx.reply('❓ Не понимаю тебя. Bыбери, что делать:', buttonContentsStart))
bot.command('reserve', async (ctx) => {
try {
    await ctx.replyWithHTML('<b>Записаться на приёмку</b> квартиры, дома, ремота или тепловизионный осмотр', Markup.inlineKeyboard(
    [
        [Markup.button.callback('📞 Телефон', 'btn_3'), Markup.button.callback('✍ WatsApp', 'btn_4')]
        ]
    ))
    } catch (e) {
        ctx.reply('Что-то пошло не так, используй команду /help')
    }
})

// Button handling
const addActionBot = (name, src, content) => {
    bot.action(name, async(ctx) => {
        try {
        await ctx.answerCbQuery() //убрать часы с кнопки
        if (src !== false) {
            await ctx.replyWithPhoto({source: src})
        }
        await ctx.replyWithHTML(content, { disable_web_page_preview: true }) // не будет изображения превью ссылки
    } catch (e) {
        ctx.reply('Что-то пошло не так, используй команду /help')
    }
    })
}

addActionBot('btn_1', './images/about.JPG', content.content1)
addActionBot('btn_2', false, content.content2)
addActionBot('btn_3', false, content.content3)
addActionBot('btn_4', false, content.content4)

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
