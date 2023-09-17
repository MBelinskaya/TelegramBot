const { Telegraf, Markup } = require('telegraf')
// const { message } = require('telegraf/filters')
require('dotenv').config()
const content = require('./const')
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.help((ctx) => ctx.reply(content.commands))
bot.start((ctx) => ctx.replyWithHTML(`Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'пользователь'}!
<b>Выбери, что делать?</b>`, Markup.inlineKeyboard(
    [
    [Markup.button.callback('Принять квартиру самостоятельно', 'btn_1')],
    [Markup.button.callback('Записаться на приёмку к специалисту', 'btn_2')]
    ]
)))
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))

// Button handling
const addActionBot = (name, src, content) => {
    bot.action(name, async(ctx) => {
        try {
        await ctx.answerCbQuery() //убрать часы с кнопки
        if (src !== false) {
            await ctx.replyWithPhoto({source: src})
        }
        await ctx.replyWithHTML(content, { disable_web_page_preview: true }) 
    } catch (e) {
        console.error(e)
    }
    })
}

addActionBot('btn_1', false, content.content1)
addActionBot('btn_2', './images/about.JPG', content.content2)

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
