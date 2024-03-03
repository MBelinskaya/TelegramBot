import { Markup } from 'telegraf';

const commands = `
/start - Перезапустить бота
/reserve - Записаться на приёмку
/help - Помощь
`
const communicationChannels = Markup.inlineKeyboard([
    [Markup.button.callback('📞 Телефон', 'phone')],
    [Markup.button.callback('✍ WatsApp', 'messenger')]
])

const buttonContentsStart = Markup.inlineKeyboard([[Markup.button.callback('📋 Принять квартиру самостоятельно', 'independ')],
[Markup.button.callback('👷 Записаться на приёмку к специалисту', 'contacts')]]);

const errorMessage = 'Что-то пошло не так, используй команду /help'

const WatsApp = `
<a href="https://wa.me/+73433833524">открыть в приложении</a>
`
const phoneNumber = '+73433833524'

const btn_floor_1 = 'вернутья назад'

const backFloor = Markup.inlineKeyboard([
    Markup.button.callback('↩ вернуться в раздел', 'btn_floor'), Markup.button.callback('➡ к общему списку', 'independ')]);

const backWalls = Markup.inlineKeyboard([
    Markup.button.callback('↩ вернуться в раздел', 'btn_walls'), Markup.button.callback('➡ к общему списку', 'independ')]);

const backCeiling = Markup.inlineKeyboard([
    Markup.button.callback('↩ вернуться в раздел', 'btn_ceiling'), Markup.button.callback('➡ к общему списку', 'independ')]);

const backWater = Markup.inlineKeyboard([
    Markup.button.callback('↩ вернуться в раздел', 'btn_water'), Markup.button.callback('➡ к общему списку', 'independ')]);

const backElectricity = Markup.inlineKeyboard([
    Markup.button.callback('↩ вернуться в раздел', 'btn_electricity'), Markup.button.callback('➡ к общему списку', 'independ')]);

const backVentilation= Markup.inlineKeyboard([
    Markup.button.callback('↩ вернуться в раздел', 'btn_ventilation'), Markup.button.callback('➡ к общему списку', 'independ')]);

const backWindow= Markup.inlineKeyboard([
    Markup.button.callback('↩ вернуться в раздел', 'btn_window'), Markup.button.callback('➡ к общему списку', 'independ')]);

const backDoor= Markup.inlineKeyboard([
    Markup.button.callback('↩ вернуться в раздел', 'btn_door'), Markup.button.callback('➡ к общему списку', 'independ')]);

const backAir= Markup.inlineKeyboard([
    Markup.button.callback('↩ вернуться в раздел', 'btn_air'), Markup.button.callback('➡ к общему списку', 'independ')]);


export { commands, communicationChannels, WatsApp, btn_floor_1, errorMessage, buttonContentsStart, phoneNumber,
    backFloor, backWalls, backCeiling, backWater, backElectricity, backVentilation, backWindow, backDoor, backAir };
