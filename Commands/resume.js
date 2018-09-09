const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix, server) => {

    if(!server.dispatcher) return message.channel.send(":x: | Sorry! There is no dispatcher for your server.");

    server.dispatcher.resume();

    message.channel.send(":white_check_mark: | Success! I have resumed the current song.");

}