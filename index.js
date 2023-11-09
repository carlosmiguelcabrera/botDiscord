const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const config = require('./config.json');

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials:[Object.keys(Partials)],
});

client.setMaxListeners(0);

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find(channel => channel.name === '🚀┋bienvenida'); // Reemplaza 'nombre-del-canal' con el nombre del canal donde deseas enviar el mensaje de bienvenida

  if (!channel) return; // Si no se encuentra el canal, no se enviará el mensaje

  channel.send(`¡Bienvenido/a, ${member}! Espero que disfrutes tu estadía en el servidor.`); // Puedes personalizar el mensaje de bienvenida aquí
});

client.on('messageCreate', async (message) => {
  if (message.content === '!ip') {
    // Si el contenido del mensaje es '!ip'
    return message.channel.send('Estado online.'); // Envía el mensaje 'Estado online.'
  }
  if (message.content === 'hola') {
    // Si el contenido del mensaje es 'hola'
    return message.reply({content:`Hola ${message.author}`}); // Responde con el mensaje 'Hola' seguido del autor del mensaje
  }
});

client.login(config.token).then(() => {
  console.log(`${client.user.username} Estado online.`);
}).catch((err) => {
  console.log(err);
});