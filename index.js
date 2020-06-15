const config = require('./package.json')
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.once('ready', () => {
  console.log(`Sendfy On-line`);
  bot.user.setActivity("Meu prefixo é * ",{type: "PLAYING"}); //PLAYNG = jogando, listening = ouvindo, watching = assistindo
});


  bot.on('message', message =>{
    if(message.author.bot) return; //se a mensagem for enviada por outro bot, o Sendfy não irá responder com nada.
    if(message.channel.type === "dm") return; //se a mensagem for enviada dm, o Sendfy não irá responder com nada.

    let prefix = config.prefix
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;

    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if(arquivocmd) arquivocmd.run(bot,message,args);
    
});

bot.login("NzIxOTQxMjM4NzY0MjczNjc0.XucaJQ.niQgwQLuj9mtUwLJsNRqtN9Rq2w");