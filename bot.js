const Discord = require('discord.js');

const botConfig = require('./config/config.json');
const command = require('./commands/index.js');

const botCherprang = new Discord.Client();

botCherprang.on('ready', () => {

  /* status
    - online
    - idle
    - invisible
    - dnd
  */
  botCherprang.user.setStatus('online');

  botCherprang.user.setPresence({
    game: {
      name: 'นมเปรี้ยวทอด',
      type: 'Cooking'
    }
  });

});

botCherprang.on('message', message => {

  if (message.author.bot == true) return;
  // if (message.author.equals(bot.user)) return; // same

  // if (!message.content.startsWith(PREFIX)) return;

  /* music */
  if (message.content.match(/^k play/)) {
    command.music(message);
  }

  command.message(message);

});

botCherprang.login(botConfig.TOKEN);