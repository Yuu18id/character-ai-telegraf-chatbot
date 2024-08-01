const Telegraf = require('telegraf');
const bot = new Telegraf(''); //bot token
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async() => {
    await characterAI.authenticateWithToken(''); //account token or using guest authenticateAsGuest() 
    const characterId = "" //characterid token
    const chat = await characterAI.createOrContinueChat(characterId);
    
    bot.start((ctx) => {
        ctx.reply('Welcome '+ ctx.from.first_name)
    });

    bot.on('text', async(ctx) => {
        const response = await chat.sendAndAwaitResponse(ctx.message.text, true)
        ctx.reply(response.text)
    });
})();

bot.launch()
