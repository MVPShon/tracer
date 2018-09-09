const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix, server) => {

    message.guild.me.voiceChannel.leave();

    message.channel.send(":white_check_mark: | Successfully left the Voice Channel.");
}