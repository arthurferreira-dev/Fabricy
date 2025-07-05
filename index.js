const Discord = require("discord.js");

require('dotenv').config();

const client = new Discord.Client({
    intents: [1, 512, 32768, 2, 128,
        Discord.IntentsBitField.Flags.Guilds,
        Discord.IntentsBitField.Flags.GuildMembers,
        Discord.IntentsBitField.Flags.GuildMessages,
        Discord.IntentsBitField.Flags.MessageContent,
        Discord.IntentsBitField.Flags.GuildMessageReactions,
        Discord.IntentsBitField.Flags.DirectMessages,
        Discord.IntentsBitField.Flags.GuildInvites
    ],
    partials: [
        Discord.Partials.User,
        Discord.Partials.Message,
        Discord.Partials.Reaction,
        Discord.Partials.GuildMember,
        Discord.Partials.Channel
    ]
});

module.exports = client;

client.on("messageCreate", (message) => {
    if (message.author.bot) return

    if (message.content ===  '!help') {
        message.reply('Vá para #𝘿𝙪𝙫𝙞𝙙𝙖s-❓')
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return

    if (message.content === '@Fabricy') {
        message.reply('O que você quer?')
    }
})

client.on('ready', (e) => {
    console.log(`${e.user.tag} está online!`);
});

client.login(process.env.TOKEN);