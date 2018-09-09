const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

    let user = message.mentions.users.first() || message.author;

    let whois = new Discord.RichEmbed()
    .setColor(0xffc07c)
    .setTitle(`Infomation for ${user.tag}`)
    .addField("Bot:", user.bot)
    .addField("Account Created At:", user.createdAt)
    .addField("Identification:", user.id)
    .addField("Discriminator:", user.discriminator)
    .setThumbnail(user.displayAvatarURL)
    message.channel.send(whois);

};