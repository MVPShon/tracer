const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

if(!args[0]) {
    let sounds = new Discord.RichEmbed()
    .setColor(0xffc07c)
    .setTitle("Soundboard sounds")
    .setDescription(`1. ${prefix}soundboard cheerslove | Tracer's Cheers love the cavalrys here!\n2. ${prefix}soundboard afk | D.va's Ughh AFK!\n3. ${prefix}soundboard dawae | Do u kno da wae?\n4. ${prefix}soundboard oof | Oooof\n5. ${prefix}soundboard triple | Ooooh baby a triple!\n6. ${prefix}soundboard sad | Sad airhorn!`)
    message.channel.send(sounds);
}


if(args[0] === "cheerslove") {
    if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        const voiceChannel = message.member.voiceChannel;
        const dispatcher = connection.playStream(`././Sounds/cheerslove.ogg`);
        dispatcher.on('end', () => voiceChannel.leave());
    } else {
        message.channel.send(":x: | Sorry! Please join a Voice Channel.");
    }
}

if(args[0] === "afk") {
    if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        const voiceChannel = message.member.voiceChannel;
        const dispatcher = connection.playStream(`././Sounds/AFK.ogg`);
        dispatcher.on('end', () => voiceChannel.leave());
    } else {
        message.channel.send(":x: | Sorry! Please join a Voice Channel.");
    }
}

if(args[0] === "dawae") {
    if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        const voiceChannel = message.member.voiceChannel;
        const dispatcher = connection.playStream(`././Sounds/dewae.mp3`);
        dispatcher.on('end', () => voiceChannel.leave());
    } else {
        message.channel.send(":x: | Sorry! Please join a Voice Channel.");
    }
}

if(args[0] === "oof") {
    if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        const voiceChannel = message.member.voiceChannel;
        const dispatcher = connection.playStream(`././Sounds/oof.mp3`);
        dispatcher.on('end', () => voiceChannel.leave());
    } else {
        message.channel.send(":x: | Sorry! Please join a Voice Channel.");
    }
}

if(args[0] === "triple") {
    if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        const voiceChannel = message.member.voiceChannel;
        const dispatcher = connection.playStream(`././Sounds/atriple.mp3`);
        dispatcher.on('end', () => voiceChannel.leave());
    } else {
        message.channel.send(":x: | Sorry! Please join a Voice Channel.");
    }
}

if(args[0] === "sad") {
    if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        const voiceChannel = message.member.voiceChannel;
        const dispatcher = connection.playStream(`././Sounds/sad.mp3`);
        dispatcher.on('end', () => voiceChannel.leave());
    } else {
        message.channel.send(":x: | Sorry! Please join a Voice Channel.");
    }
}

};