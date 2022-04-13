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
            .setTitle("SlowCity | Map")
            .setDescription("זוהי המפה שנבנתה על ידי flayer\nהמפה עם זכויות יוצרים, כל העתקה תענש בחומרה!\nלעוד עדכונים כנסו לחדר עדכונים");
        message.channel.send({ embeds: [embed] });
    },
};
