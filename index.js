import { Client, IntentsBitField } from "discord.js";
import * as dotenv from "dotenv";
dotenv.config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return

    if (message.content ===  "!help") {
        message.reply("Vá para #𝘿𝙪𝙫𝙞𝙙𝙖s-❓")
    }
})

client.on('ready', (e) => {
    console.log(`${e.user.tag} está online!`);
});

client.login(process.env.TOKEN);