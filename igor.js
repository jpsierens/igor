
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

client.login(token);
