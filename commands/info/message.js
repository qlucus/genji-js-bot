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
            const anonymous = (' ').join(); 
            message.delete();
            message.channel.send(`${anonymous}`);
        }
    },
};
