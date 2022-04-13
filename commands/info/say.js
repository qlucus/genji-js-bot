const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "say",
    aliases: ['s'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const SayMessage = message.content.slice(4).trim();
        message.channel.send("**" + SayMessage + "**")
    },
};