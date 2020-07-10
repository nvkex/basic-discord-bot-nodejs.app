/* eslint-disable linebreak-style */
const Discord = require('discord.js');
const client = new Discord.Client();
const commandHandler = require('./commands');
require('dotenv').config();


client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', commandHandler);

client.login(process.env.BOT_TOKEN);