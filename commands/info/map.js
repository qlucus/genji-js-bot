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
            .setTitle("SlowCity Map")
            .setThumbnail("https://media.discordapp.net/attachments/738901088526401537/957932363441131530/Screenshot_25.png")
            .setAuthor("SlowCity | Map")
            .setDescription("✦ **המפה נבנתה על ידי פלייר** ✦\n✦ **למפה יש זכויות יוצרים, כל עתקה זה עונש** ✦\n✦ **במפה תוכלו לראות את כל האזורים הנל** ✦\n✦ **אסור לנצל עבודות שיש במפה** ✦");
        message.channel.send({ embeds: [embed] });
    },
};
