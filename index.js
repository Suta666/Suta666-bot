const Discord = require('discord.js');
const client = new Discord.Client();

console.log('connexion.............');

client.on('ready', () => {
    console.log(`succesfully logged as ${client.user.tag}`);
 });
 
 client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
 
 client.login(process.env.TOKEN);
    
    
