const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "darkchat",
    aliases: ['dc'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (message.channelId === "964290303672614972") {
            const anonymous = message.content.slice(4).trim();
            message.delete();
            message.channel.send(anonymous);
        } else {
            message.channel.send("You have to type it in the channel `TEST`");
        }
    },
};
