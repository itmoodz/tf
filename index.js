const Discord = require("discord.js");
const voice = require("@discordjs/voice");
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent
    ] 
});

const config = {
    "token": "", //โทเคนบอท
    "guildId": "", //ไอดีดิส
    "channelId": "" //ไอดีช่องที่ต้องการให้ออน
}

client.on("ready", async () => {
    console.log("Ready! Checking");
    const guild = client.guilds.cache.get(config['guildId']);

    if (guild) {
        console.log("Founded guild! Checking Channel");

        const channel = guild.channels.cache.get(config['channelId']);
        if(channel) {
            if (channel.type == Discord.ChannelType.GuildVoice) {
                const connection = voice.joinVoiceChannel({
                    channelId: channel.id,
                    guildId: channel.guild.id,
                    adapterCreator: channel.guild.voiceAdapterCreator,
                });

                console.log('Joined Channel!');
            } else {
                console.log("Found channel but isn't voice channel!");
            }
        } else {
            console.log("Can't find channel!")
        }
    } else {
        console.log("Can't find guilds!")
    }
});

client.login(config['token'])

const foxic = require("meoaw.js")
foxic.host();
