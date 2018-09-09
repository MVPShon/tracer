const Discord = require('discord.js'),
    superagent = require('superagent');

    exports.run = async (bot, message, args, prefix, server) => {

        let {
            body
        } = await superagent
            .get(`https://random.dog/woof.json`);
        const dogembed = new Discord.RichEmbed()
            .setTitle("Woof :dog:")
            .setColor(0xffc07c)
            .setImage(body.url)
        message.channel.send(dogembed);

    }