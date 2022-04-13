const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "sayembed",
    aliases: ['se'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.delete();
        const SayMessage = message.content.slice(4).trim();
        const embed = new MessageEmbed()
            .setColor("#FFF700")
            .setDescription(SayMessage)
        message.channel.send({ embeds: [embed] });
    },
};
