const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

    if(message.guild.me.voiceChannel) return message.channel.send(":x: | Sorry! I'm already playing in a channel.");

if(!args[0]) {
    let sounds = new Discord.RichEmbed()
    .setColor(0xffc07c)
    .setTitle("Soundboard sounds")
    .setDescription(`1. ${prefix}soundboard cheerslove | Tracer's Cheers love the cavalrys here!\n2. ${prefix}soundboard afk | D.va's Ughh AFK!\n3. ${prefix}soundboard dawae | Do u kno da wae?\n4. ${prefix}soundboard oof | Oooof\n5. ${prefix}soundboard triple | Ooooh baby a triple!\n6. ${prefix}soundboard sad | Sad airhorn!\n7. ${prefix}soundboard happyfrog | Wishoo Ninja Skills!\n8. ${prefix}soundboard 5coins | Please deposit 5 coins!\n9. ${prefix}soundboard shhh | Lefty Voice Lines`)
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

if(args[0] === "happyfrog") {
    if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        const voiceChannel = message.member.voiceChannel;
        const dispatcher = connection.playStream(`././Sounds/happyfrog.mp3`);
        dispatcher.on('end', () => voiceChannel.leave());
    } else {
        message.channel.send(":x: | Sorry! Please join a Voice Channel.");
    }
}

if(args[0] === "5coins") {
    if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        const voiceChannel = message.member.voiceChannel;
        const dispatcher = connection.playStream(`././Sounds/5coins.mp3`);
        dispatcher.on('end', () => voiceChannel.leave());
    } else {
        message.channel.send(":x: | Sorry! Please join a Voice Channel.");
    }
}

if(args[0] === "shhh") {
    if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        const voiceChannel = message.member.voiceChannel;
        const dispatcher = connection.playStream(`././Sounds/lefty.mp3`);
        dispatcher.on('end', () => voiceChannel.leave());
    } else {
        message.channel.send(":x: | Sorry! Please join a Voice Channel.");
    }
}

};