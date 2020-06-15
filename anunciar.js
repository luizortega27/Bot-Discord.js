const Discord = require("discordjs");
const { Message } = require("discord.js");

exports.run = (bot,message,args)=> {
    let splitarg = args.join(" ").split(" / ");
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        return message.reply("Acesso negado!");
    }
    if(args.length === 0){
        return message.reply(" Utilize: rc.anunciar <título> / <anúncio>")
    }
    let aTitle = splitarg[0];
    let aAnnouncement = splitarg[1];
    let aEmbed = new discord.RichEmbed

    .setTimestamp()
    .setTitle(aTitle)
    .setColor("RANDOM")
    .setDescription(aAnnouncement)
    .setFooter(`Enviado por: ${message.author.username}`,message.author.avatarURL);

    let aChannel = bot.channels.get("696866897458888798");
    try{
    aChannel.send(aEmbed);
    } catch (error){
        console.log(error);
        message.channel.send(error);
    }
}

exports.help = {
    name: "anunciar"
}