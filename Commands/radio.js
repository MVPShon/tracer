const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix, server) => {

if(!message.member.voiceChannel) return message.channel.send(":x: | Sorry! Please join a Voice Channel.");

if(message.guild.me.voiceChannel) return message.channel.send(":x: | Sorry! I'm already playing in a channel.")

message.channel.send(":white_check_mark: | Connected to H1T.")

message.member.voiceChannel.join().then(conn => {
    require('http').get("http://streaming.radionomy.com/H1T", (res) => {
        conn.playArbitraryInput(res);

    });
})
//English Pop Radio http://streaming.radionomy.com/H1T
}