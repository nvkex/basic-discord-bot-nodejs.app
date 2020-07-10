/* eslint-disable linebreak-style */
const ping = require('./ping');
const eightBall = require('./8ball');

const guildID = '731161326495334482';
const channelID = '731162195643203637';

const commands = {
    ping,
    '8ball': eightBall,

};

module.exports = async (msg) => {
    if (msg.guild.id == guildID && msg.channel.id == channelID) {
        const args = msg.content.split(' ');
        if(args.length == 0 || args[0].charAt(0) !== '!') return;
        const command = args.shift().substr(1);
        // TODO: fix vunerability
        // if(command in commands){
        //     commands[command](msg, args);
        // }
        if(Object.keys(commands).includes(command)){
            commands[command](msg, args);
        }
    }
};