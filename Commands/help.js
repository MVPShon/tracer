const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

let pages = [`**${prefix}whois (@Mention)**\nGets the info of the mentioned user.`, `**${prefix}soundboard**\nGets all sounds that can be played!.\n\n**${prefix}cat**\nAwww Cat images\n\n**${prefix}dog**\nAwww Dog images`, `**${prefix}play [Song Name || URL]**\nSearches and plays the selected song.\n\n**${prefix}pause**\nPauses the current song.\n\n**${prefix}resume**\nResumes the current song.\n\n**${prefix}skip**\nSkips the current song.\n\n**${prefix}controls**\nMusic controls.\n\n**${prefix}radio**\nPlays the H1T radio.\n\n**${prefix}leave**\nLeaves the Voice Channel.`];
let pageTitles = [`Utility`, `Fun`, `Music`];
let page = 1;

const embed = new Discord.RichEmbed()
    .setColor(0xffc07c)
    .setTitle(pageTitles[page-1])
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
    message.channel.send(embed).then(embeds => {
         embeds.react("⏪").then(async r => {
             await embeds.react('⏹');
            await embeds.react("⏩");

            async function react(msg) {
                await msg.react('⏪')
                await msg.react('⏹');
                await msg.react('⏩')
            }

            const backwardsFilter = (reaction, user) => reaction.emoji.name === "⏪" && user.id === message.author.id;
            const stopFilter = (reaction, user) => reaction.emoji.name === "⏹" && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === "⏩" && user.id === message.author.id;

            const backwards = embeds.createReactionCollector(backwardsFilter, { time: 60000 });
            const stop = embeds.createReactionCollector(stopFilter, { time: 60000 });
            const forwards = embeds.createReactionCollector(forwardsFilter, { time: 60000 });
            
            backwards.on('collect', async r => { 
                await embeds.clearReactions()
                react(embeds)
                if (page === 1) return; 
                page--; 
                embed.setTitle(pageTitles[page-1])
                embed.setDescription(pages[page-1]); 
                embed.setFooter(`Page ${page} of ${pages.length}`); 
                embeds.edit(embed) 
              })
              forwards.on('collect', async r => {
                await embeds.clearReactions()
                react(embeds)
                if (page === pages.length) return; 
                page++; 
                embed.setTitle(pageTitles[page-1])
                embed.setDescription(pages[page-1]); 
                embed.setFooter(`Page ${page} of ${pages.length}`); 
                embeds.edit(embed) 
              })
              stop.on('collect', async r => {
                embeds.delete();
              })
        })

    });

}