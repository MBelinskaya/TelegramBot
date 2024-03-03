import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';
import * as content from './src/const.js';
import * as contetnt_floor from './src/content/btn_contetnt_floor.js';
import * as contetnt_walls from './src/content/btn_content_walls.js';
import * as contetnt_ceiling from './src/content/btn_content_ceiling.js';
import * as contetnt_water from './src/content/btn_content_water.js';
import * as contetnt_electricity from './src/content/btn_content_electricity.js';
import * as contetnt_ventilation from './src/content/btn_content_ventilation.js';
import * as contetnt_window from './src/content/btn_content_window.js';
import * as contetnt_door from './src/content/btn_content_door.js';
import * as contetnt_air from './src/content/btn_content_air.js';
import * as dotenv from 'dotenv';
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.help((ctx) => ctx.reply(content.commands))
bot.start((ctx) => ctx.replyWithHTML(`Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'пользователь'}!
<b>Выбери, что делаем?</b>`, content.buttonContentsStart))
bot.command('reserve', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Записаться на приёмку</b> квартиры, дома, ремота или тепловизионный осмотр:', content.communicationChannels)
        } catch (e) {
            ctx.reply(content.errorMessage)
        }
    })
    
bot.on(message('text'), (ctx) => ctx.reply('Не понимаю тебя. \nBыбери, что делать:', content.buttonContentsStart))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))

// Обработка самостоятельной приемки
    bot.action('independ', async(ctx) => {
        try {
        await ctx.answerCbQuery() //убрать часы с кнопки
        await ctx.replyWithHTML('<b>Выбери раздел/конструкцию:</b>', Markup.inlineKeyboard([
            [Markup.button.callback('Пол', 'btn_floor')],
            [Markup.button.callback('Стены', 'btn_walls')],
            [Markup.button.callback('Потолок', 'btn_ceiling')],
            [Markup.button.callback('Водоснабжение, канализация, отопление', 'btn_water')],
            [Markup.button.callback('Электрика', 'btn_electricity')],
            [Markup.button.callback('Вентиляция', 'btn_ventilation')],
            [Markup.button.callback('Окна, витражи лоджий', 'btn_window')],
            [Markup.button.callback('Двери', 'btn_door')],
            [Markup.button.callback('Температура и влажность воздуха', 'btn_air')],
            // [Markup.button.callback('📚 Правовая информация', 'btn_legal')]
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
// Обработка раздела стены
bot.action('btn_walls', async(ctx) => {
    try {
    await ctx.answerCbQuery() 
    await ctx.replyWithHTML('<b>Выбери, что проверяем:</b>', Markup.inlineKeyboard([
    [Markup.button.callback('Оштукатуренные стены', 'btn_walls_1')],
    [Markup.button.callback('Обои', 'btn_walls_2')],
    [Markup.button.callback('Малярные работы (покраска)', 'btn_walls_3')],
    [Markup.button.callback('Перегородки из ГКЛ/ГВЛ', 'btn_walls_4')],
    [Markup.button.callback('Кирпичная кладка', 'btn_walls_5')],
    [Markup.button.callback('↩ Вернуться', 'independ')]
])) 
} catch (e) {
    ctx.reply(content.errorMessage)
}
})

// Обработка раздела потолок
bot.action('btn_ceiling', async(ctx) => {
    try {
    await ctx.answerCbQuery() 
    await ctx.replyWithHTML('<b>Выбери, что проверяем:</b>', Markup.inlineKeyboard([
    [Markup.button.callback('Геометрия', 'btn_ceiling_1')],
    [Markup.button.callback('Внешний вид', 'btn_ceiling_2')],
    [Markup.button.callback('Трещины', 'btn_ceiling_3')],
    [Markup.button.callback('Раковины', 'btn_ceiling_4')],
    [Markup.button.callback('↩ Вернуться', 'independ')]
])) 
} catch (e) {
    ctx.reply(content.errorMessage)
}
})


// Обработка раздела водоснабжене
bot.action('btn_water', async(ctx) => {
    try {
    await ctx.answerCbQuery() 
    await ctx.replyWithHTML('<b>Выбери, что проверяем:</b>', Markup.inlineKeyboard([
    [Markup.button.callback('Монтаж трубопроводов', 'btn_water_1')],
    [Markup.button.callback('Монтаж радиаторов', 'btn_water_2')],
    [Markup.button.callback('Противопожарные муфты системы канализации', 'btn_water_3')],
    [Markup.button.callback('Водомерный узел', 'btn_water_4')],
    [Markup.button.callback('↩ Вернуться', 'independ')]
])) 
} catch (e) {
    ctx.reply(content.errorMessage)
}
})

// Обработка раздела электрика
bot.action('btn_electricity', async(ctx) => {
    try {
    await ctx.answerCbQuery() 
    await ctx.replyWithHTML('<b>Выбери, что проверяем:</b>', Markup.inlineKeyboard([
    [Markup.button.callback('Напряжение', 'btn_electricity_1')],
    [Markup.button.callback('Проверка работы УЗО', 'btn_electricity_2')],
    [Markup.button.callback('Щитки распределительные', 'btn_electricity_3')],
    [Markup.button.callback('↩ Вернуться', 'independ')]
])) 
} catch (e) {
    ctx.reply(content.errorMessage)
}
})

// Обработка раздела вентиляция
bot.action('btn_ventilation', async(ctx) => {
    try {
    await ctx.answerCbQuery() 
    await ctx.replyWithHTML('<b>Выбери, что проверяем:</b>', Markup.inlineKeyboard([
    [Markup.button.callback('Работоспособность системы вентиляции', 'btn_ventilation_1')],
    [Markup.button.callback('↩ Вернуться', 'independ')]
])) 
} catch (e) {
    ctx.reply(content.errorMessage)
}
})

// Обработка раздела окна
bot.action('btn_window', async(ctx) => {
    try {
    await ctx.answerCbQuery() 
    await ctx.replyWithHTML('<b>Выбери, что проверяем:</b>', Markup.inlineKeyboard([
    [Markup.button.callback('Дефекты сварных швов', 'btn_window_1')],
    [Markup.button.callback('Провисание створок', 'btn_window_2')],
    [Markup.button.callback('Оценка внешнего вида', 'btn_window_3')],
    [Markup.button.callback('Прижим створок', 'btn_window_4')],
    [Markup.button.callback('Проверка работы окон', 'btn_window_5')],
    [Markup.button.callback('Отклонение от вертикали оконного блока', 'btn_window_6')],
    [Markup.button.callback('Монтаж  наружного отлива', 'btn_window_7')],
    [Markup.button.callback('Монтаж подоконника', 'btn_window_8')],
    [Markup.button.callback('Проверка стеклопакетов', 'btn_window_9')],
    [Markup.button.callback('Витражи лоджий. Геометрия', 'btn_window_10')],
    [Markup.button.callback('Витражи лоджий. Внешний вид', 'btn_window_11')],
    [Markup.button.callback('↩ Вернуться', 'independ')]
])) 
} catch (e) {
    ctx.reply(content.errorMessage)
}
})

// Обработка раздела двери
bot.action('btn_door', async(ctx) => {
    try {
    await ctx.answerCbQuery() 
    await ctx.replyWithHTML('<b>Выбери, что проверяем:</b>', Markup.inlineKeyboard([
    [Markup.button.callback('Блоки дверные стальные. Проверка прижима', 'btn_door_1')],
    [Markup.button.callback('Блоки дверные стальные. Геометрия дверного блока', 'btn_door_2')],
    [Markup.button.callback('Блоки дверные стальные. Оценка внешнего вида двери', 'btn_door_3')],
    [Markup.button.callback('Блоки дверные стальные. Монтаж дверной коробки', 'btn_door_4')],
    [Markup.button.callback('Блоки дверные стальные. Открывание/закрывание замка', 'btn_door_5')],
    [Markup.button.callback('Межкомнатные двери. Геометрия дверного блока', 'btn_door_6')],
    [Markup.button.callback('Межкомнатные двери. Открывание/закрывание дверного блока', 'btn_door_7')],
    [Markup.button.callback('Межкомнатные двери. Монтаж обналички', 'btn_door_8')],
    [Markup.button.callback('Межкомнатные двери. Оценка внешнего вида', 'btn_door_9')],
    [Markup.button.callback('Межкомнатные двери. Отклонение от вертикали', 'btn_door_10')],
    [Markup.button.callback('↩ Вернуться', 'independ')]
])) 
} catch (e) {
    ctx.reply(content.errorMessage)
}
})

// Обработка раздела воздух
bot.action('btn_air', async(ctx) => {
    try {
    await ctx.answerCbQuery() 
    await ctx.replyWithHTML('<b>Выбери, что проверяем:</b>', Markup.inlineKeyboard([
    [Markup.button.callback('Требуемая температура воздуха в жилых помещениях', 'btn_air_1')],
    [Markup.button.callback('Требуемая влажность воздуха в жилых помещениях', 'btn_air_2')],
    [Markup.button.callback('↩ Вернуться', 'independ')]
])) 
} catch (e) {
    ctx.reply(content.errorMessage)
}
})


const getActionBot = (name, src, content1) => {
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

const getContentBtn = (name, mediaContent, back) => {
	bot.action(name, async(ctx) => {
    try {
    await ctx.answerCbQuery(); 
    await ctx.replyWithMediaGroup(mediaContent)
    await ctx.replyWithHTML('<b>Выбери, что делаем:</b>', back)
} catch (e) {
    ctx.reply(content.errorMessage)
}})
};


getActionBot('independ', false, content.communicationChannels)
getActionBot('contacts', false, content.communicationChannels)
getActionBot('phone',false, content.phoneNumber)
getActionBot('messenger',false, content.WatsApp)
getActionBot('btn_floor', false, content.btn_floor_1)

getContentBtn('btn_floor_1', contetnt_floor.btn_floor_1_links, content.backFloor)
getContentBtn('btn_floor_2', contetnt_floor.btn_floor_2_links, content.backFloor)
getContentBtn('btn_floor_3', contetnt_floor.btn_floor_3_links, content.backFloor)

getContentBtn('btn_walls_1', contetnt_walls.btn_walls_1_links, content.backWalls)
getContentBtn('btn_walls_2', contetnt_walls.btn_walls_2_links, content.backWalls)
getContentBtn('btn_walls_3', contetnt_walls.btn_walls_3_links, content.backWalls)
getContentBtn('btn_walls_4', contetnt_walls.btn_walls_4_links, content.backWalls)
getContentBtn('btn_walls_5', contetnt_walls.btn_walls_5_links, content.backWalls)

getContentBtn('btn_ceiling_1', contetnt_ceiling.btn_ceiling_1_links, content.backCeiling)
getContentBtn('btn_ceiling_2', contetnt_ceiling.btn_ceiling_2_links, content.backCeiling)
getContentBtn('btn_ceiling_3', contetnt_ceiling.btn_ceiling_3_links, content.backCeiling)
getContentBtn('btn_ceiling_4', contetnt_ceiling.btn_ceiling_4_links, content.backCeiling)

getContentBtn('btn_water_1', contetnt_water.btn_water_1_links, content.backWater)
getContentBtn('btn_water_2', contetnt_water.btn_water_2_links, content.backWater)
getContentBtn('btn_water_3', contetnt_water.btn_water_3_links, content.backWater)
getContentBtn('btn_water_4', contetnt_water.btn_water_4_links, content.backWater)

getContentBtn('btn_electricity_1', contetnt_electricity.btn_electricity_1_links, content.backElectricity)
getContentBtn('btn_electricity_2', contetnt_electricity.btn_electricity_2_links, content.backElectricity)
getContentBtn('btn_electricity_3', contetnt_electricity.btn_electricity_3_links, content.backElectricity)

getContentBtn('btn_ventilation_1', contetnt_ventilation.btn_ventilation_1_links, content.backVentilation)

getContentBtn('btn_window_1', contetnt_window.btn_window_1_links, content.backWindow)
getContentBtn('btn_window_2', contetnt_window.btn_window_2_links, content.backWindow)
getContentBtn('btn_window_3', contetnt_window.btn_window_3_links, content.backWindow)
getContentBtn('btn_window_4', contetnt_window.btn_window_4_links, content.backWindow)
getContentBtn('btn_window_5', contetnt_window.btn_window_5_links, content.backWindow)
getContentBtn('btn_window_6', contetnt_window.btn_window_6_links, content.backWindow)
getContentBtn('btn_window_7', contetnt_window.btn_window_7_links, content.backWindow)
getContentBtn('btn_window_8', contetnt_window.btn_window_8_links, content.backWindow)
getContentBtn('btn_window_9', contetnt_window.btn_window_9_links, content.backWindow)
getContentBtn('btn_window_10', contetnt_window.btn_window_10_links, content.backWindow)
getContentBtn('btn_window_11', contetnt_window.btn_window_11_links, content.backWindow)

getContentBtn('btn_door_1', contetnt_door.btn_door_1_links, content.backDoor)
getContentBtn('btn_door_2', contetnt_door.btn_door_2_links, content.backDoor)
getContentBtn('btn_door_3', contetnt_door.btn_door_3_links, content.backDoor)
getContentBtn('btn_door_4', contetnt_door.btn_door_4_links, content.backDoor)
getContentBtn('btn_door_5', contetnt_door.btn_door_5_links, content.backDoor)
getContentBtn('btn_door_6', contetnt_door.btn_door_6_links, content.backDoor)
getContentBtn('btn_door_7', contetnt_door.btn_door_7_links, content.backDoor)
getContentBtn('btn_door_8', contetnt_door.btn_door_8_links, content.backDoor)
getContentBtn('btn_door_9', contetnt_door.btn_door_9_links, content.backDoor)
getContentBtn('btn_door_10', contetnt_door.btn_door_10_links, content.backDoor)

getContentBtn('btn_air_1', contetnt_air.btn_air_1_links, content.backAir)
getContentBtn('btn_air_2', contetnt_air.btn_air_2_links, content.backAir)

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
