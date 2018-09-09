// Require the packages
const Discord = require("discord.js");

// Define some things
let bot = new Discord.Client();
let prefix = "t!";
let serverQueues = {};


// When Tracachu is on
bot.on("ready", () => {
let loggingMessage = `
-=-=-=-=-=-=-=-=-=-=-=-=-=-
Logging in . . . 
Authenticating servers . . .
Finalizing . . .
-=-=-=-=-=-=-=-=-=-=-=-=-=-
Logged In!
-=-=-=-=-=-=-=-=-=-=-=-=-=-
`
console.log(loggingMessage);

bot.user.setStatus("idle");
bot.user.setActivity(`Cheers love Tracachu's here! | ${prefix}help for help`)


});

// When a message is sent
bot.on("message", async message => {

    // Music Queue

    if(!serverQueues[message.guild.id]) serverQueues[message.guild.id] = {

        queue: []

    }

    var server = serverQueues[message.guild.id];

    // Define more things

    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;     
    if(!message.content.startsWith(prefix)) return;


    // Command Handler
    try {

        let commandFile = require(`./Commands/${cmd}.js`);
        commandFile.run(bot, message, args, prefix, server);

    } catch (e) {
        console.log(e.stack); // Use this if thereis a error you cant solve
        //return
    }

});

// Login 
bot.login(process.env.BOT_TOKEN);