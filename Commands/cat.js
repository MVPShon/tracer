const Discord = require('discord.js'),
    superagent = require('superagent');

    exports.run = async (bot, message, args, prefix, server) => {

        let {
            body
        } = await superagent
            .get(`http://aws.random.cat/meow`);
        const catembed = new Discord.RichEmbed()
            .setTitle('Meow 🙀')
            .setColor(0xffc07c)
            .setImage(body.file)
        message.channel.send(catembed);

    }