import { Markup } from 'telegraf';

const commands = `
/start - Перезапустить бота
/reserve - Записаться на приёмку
/help - Помощь
`
const communicationChannels = Markup.inlineKeyboard([
    [Markup.button.callback('📞 Телефон', 'phone')],
    [Markup.button.callback('✍ WatsApp', 'WatsApp')]
])

const WatsApp = `
<a href="https://wa.me/+73433833524">открыть в приложении</a>
`
const btn_floor_1 = `
вернутья назад
`
const errorMessage = 'Что-то пошло не так, используй команду /help'

const buttonContentsStart = Markup.inlineKeyboard([[Markup.button.callback('📋 Принять квартиру самостоятельно', 'independ')],
[Markup.button.callback('👷 Записаться на приёмку к специалисту', 'contacts')]]);

const phoneNumber = '+73433833524'

const backFloor = Markup.inlineKeyboard([
    Markup.button.callback('↩ вернуться в раздел', 'btn_floor'), Markup.button.callback('➡ далее', 'independ')]);


export { commands, communicationChannels, WatsApp, btn_floor_1, errorMessage, buttonContentsStart,
    phoneNumber, backFloor };