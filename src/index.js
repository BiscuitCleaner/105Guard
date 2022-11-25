const mineflayer = require('mineflayer')

let config = require("../config.json")
var bot = mineflayer.createBot(
    {
        host: 'localhost',
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

bot.on('kicked', (reason, loggedIn) => {
    console.log(`Bot got kicked\n Reason: ${reason}`)
})

bot.on('error', (err)=> {
    console.log(`Bot got kicked\n Reason: ${err}`)
})