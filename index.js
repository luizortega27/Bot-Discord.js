const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  bot.user.set.setActivity("Meu prefixo é * ",{type: "PLAYING"}); //PLAYNG = jogando, listening = ouvindo, watching = assistindo
});


bot.on('message', message =>{
    if(message.author.bot) return; //se a mensagem for enviada por outro bot, o Sendfy não irá responder com nada.
    if(message.channel.type === "dm") return; //se a mensagem for enviada dm, o Sendfy não irá responder com nada.

    let prefix = config.prefix
    let messageArray = [0];
    let args = messageArray.slice(1);

    if(command = `${prefix}mensagem`){
        message.channel.send(`Olá sou o ${bot.user.username}.`);
    }

});

client.login(config.token);