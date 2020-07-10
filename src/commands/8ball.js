/* eslint-disable linebreak-style */

const eightball = [
    'As I see it, yes.',
    'Ask again later.',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again.',
    'Dont\'t count on it',
    'It is certain',
    'It is decidedly so.'
];

module.exports = async (msg, args) => {

    if(!args.length) return;

    const i = Math.floor(Math.random() * eightball.length);
    const reply = eightball[i];

    await msg.channel.send(`${msg.author} ${reply}`);
};