const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "map",
    aliases: ['m'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setColor("#00ceff")
            .setAuthor({name: "SlowCity | Map", iconURL: "https://media.discordapp.net/attachments/738901088526401537/957932363441131530/Screenshot_25.png"})
            .setDescription("זוהי המפה שנבנתה על ידי flayer\nהמפה עם זכויות יוצרים, כל העתקה תענש בחומרה!\nלעוד עדכונים כנסו לחדר עדכונים");
        message.channel.send({ embeds: [embed] });
    },
};
