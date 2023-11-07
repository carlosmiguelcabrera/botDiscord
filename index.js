const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const config = require('./config.json');

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials:[Object.keys(Partials)],
});

client.setMaxListeners(0);

client.on('messageCreate', async (message) => {
  if (message.content === '!ip') {
    return message.channel.send({content:`${message.author}`})Estado online.`
  }
  if (message.content === 'hola') {
    return message.reply({content:'Hola ${message.author}'});
    
  }
});

client.login(config.token).then(() => {
  console.log(`${client.user.username} Estado online.`);
}).catch((err) => {
  console.log(err);
})