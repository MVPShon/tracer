const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix, server) => {

   if(!server.dispatcher) return message.channel.send(":x: | Sorry! There is no dispatcher for your server.");

    let embed = new Discord.RichEmbed()
    .setColor(0xffc07c)
    .setTitle("Player Controls")
    .setDescription("**⏸ Pause**\n**▶ Resume**\n**⏭ Skip**")
    message.channel.send(embed).then(embeds => {
        embeds.react("⏸").then(async r => {
            await embeds.react("▶");
            await embeds.react("⏭");

            const pauseFilter = (reaction, user) => reaction.emoji.name === "⏸" && user.id === message.author.id;
            const resumeFilter = (reaction, user) => reaction.emoji.name === "▶" && user.id === message.author.id;
            const skipFilter = (reaction, user) => reaction.emoji.name === "⏭" && user.id === message.author.id;

            const pause = embeds.createReactionCollector(pauseFilter, { time: 60000 });
            const resume = embeds.createReactionCollector(resumeFilter, { time: 60000 });
            const skip = embeds.createReactionCollector(skipFilter, { time: 60000 });

            pause.on('collect', async r => { 
                if(!server.dispatcher) return message.channel.send(":x: | Sorry! There is no dispatcher for your server.");
                server.dispatcher.pause();
                embeds.delete();
                message.channel.send(":white_check_mark: | Success! I have paused the current song.");
              })
              resume.on('collect', async r => { 
                if(!server.dispatcher) return message.channel.send(":x: | Sorry! There is no dispatcher for your server.");
                server.dispatcher.resume();
                embeds.delete();
                message.channel.send(":white_check_mark: | Success! I have resumed the current song.");
              })
              skip.on('collect', async r => { 
                if(!server.dispatcher) return message.channel.send(":x: | Sorry! There is no dispatcher for your server.");
                message.channel.send(":white_check_mark: | Success! I have skipped the current song.");
                server.dispatcher.end();
                embeds.delete();
              })
        });
    });

}