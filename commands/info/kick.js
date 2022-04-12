const { Message, Client } = require("discord.js");

module.exports = {
    name: "kick",
    aliases: ['k'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.delete();
        let member = message.mentions.members.first();
        if(!member) return message.reply("Please mention a valid member of this server");
        if(!member.kickable) return message.reply("I cannot kick this member!");
        member.send("קיבלת קיק, כנראה זה היה מגיע לך יא נוב");
        member.kick();
        message.channel.send(`${member} **has been Kicked.**`);
    },
};
