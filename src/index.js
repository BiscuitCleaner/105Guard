const mineflayer = require('mineflayer')

let config = require("../config.json")
var bot = mineflayer.createBot(
    {
        host: config.host,
        username: config.username,
        password: '',
        version: '1.19.2',
        auth: 'microsoft'
    }
)

let ready = false

bot.once('spawn', () => {
    ready = true
    console.log("Bot is ready!")
})

setInterval(() => {
    if (ready == true) {
        bot.chat(`/visit #${config.island}`)
    }
}, 50000);

bot.on('kicked', (reason, loggedIn) => {
    console.log(`Bot got kicked\n Reason: ${reason}`)
    process.exit(3)
})

bot.on('error', (err)=> {
    console.log(`Bot got kicked\n Reason: ${err}`)
    process.exit(3)
})