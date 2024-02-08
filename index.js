import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';
import * as content from './src/const.js';
import  { btn_floor_1_links } from './src/content/btn_contetnt.js';
import * as dotenv from 'dotenv';
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);
import addActionBot from './src/addActionBot.js';
// import getContentBtn from './src/getContentBtn.js';


bot.help((ctx) => ctx.reply(content.commands))
bot.start((ctx) => ctx.replyWithHTML(`Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'пользователь'}!
<b>Выбери, что делаем?</b>`, content.buttonContentsStart))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.on(message('text' && !'reserve'), (ctx) => ctx.reply('❓ Не понимаю тебя. \nBыбери, что делать:', content.buttonContentsStart))
bot.command('reserve', async (ctx) => {
try {
    await ctx.replyWithHTML('<b>Записаться на приёмку</b> квартиры, дома, ремота или тепловизионный осмотр:', content.communicationChannels)
    } catch (e) {
        ctx.reply(content.errorMessage)
    }
})

// Обработка самостоятельной приемки
    bot.action('independ', async(ctx) => {
        try {
        await ctx.answerCbQuery() //убрать часы с кнопки
        await ctx.replyWithHTML('<b>Выбери раздел/конструкцию:</b>', Markup.inlineKeyboard([
            [Markup.button.callback('Пол', 'content.btn_floor')],
            [Markup.button.callback('Стены', 'btn_walls')],
            [Markup.button.callback('Потолок', 'btn_ceiling')],
            [Markup.button.callback('Водоснабжение, канализация, отопление', 'btn_water')],
            [Markup.button.callback('Электрика', 'btn_electricity')],
            [Markup.button.callback('Вентиляция', 'btn_ventilation')],
            [Markup.button.callback('Окна, витражи лоджий', 'btn_window')],
            [Markup.button.callback('Двери', 'btn_door')],
            [Markup.button.callback('Температура и влажность воздуха', 'btn_air')],
            [Markup.button.callback('Тепловизионный осмотр', 'btn_thermal')],
            [Markup.button.callback('📚 Правовая информация', 'btn_legal')]
        ])) 
    } catch (e) {
        ctx.reply(content.errorMessage)
    }
    })
// Запись на приемку
    bot.action('contacts', async(ctx) => {
        try {
        await ctx.answerCbQuery() //убрать часы с кнопки
        await ctx.replyWithHTML('<b>Способ связи:</b>', content.communicationChannels)
    } catch (e) {
        ctx.reply(content.errorMessage)
    }
    })
// Обработка раздела пол
    bot.action('btn_floor', async(ctx) => {
        try {
        await ctx.answerCbQuery() 
        await ctx.replyWithHTML('<b>Выбери, что проверяем:</b>', Markup.inlineKeyboard([
        [Markup.button.callback('Стяжка пола (отделка под чистовую)', 'btn_floor_1')],
        [Markup.button.callback('Ламинат (чистовая отделка)', 'btn_floor_2')],
        [Markup.button.callback('Керамическая плитка', 'btn_floor_3')],
        [Markup.button.callback('↩ Вернуться', 'independ')]
    ])) 
    } catch (e) {
        ctx.reply(content.errorMessage)
    }
})

// const backFloor = Markup.inlineKeyboard([
//     Markup.button.callback('↩ вернуться в раздел', 'btn_floor'), Markup.button.callback('➡ далее', 'independ')]);


const getContentBtn = (name, backFloor, content) => {
	bot.action(name, async(ctx) => {
    try {
    await ctx.answerCbQuery(); 
    await ctx.replyWithMediaGroup(content)
    await ctx.replyWithHTML('<b>Выбери, что делаем:</b>', backFloor)
} catch (e) {
    ctx.reply(content.errorMessage)
}
})
};


addActionBot('independ', './images/about.JPG', content.communicationChannels)
addActionBot('contacts', false, content.communicationChannels)
addActionBot('phone', false, content.phoneNumber)
addActionBot('WatsApp', false, content.WatsApp)
addActionBot('btn_floor', false, content.btn_floor_1)
getContentBtn('content.btn_floor_1', content.backFloor, btn_floor_1_links)

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
