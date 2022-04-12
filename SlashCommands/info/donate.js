const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "donate",
    description: "Support us! 🤍",
    run: async(client, interaction) => {
        const embed = new MessageEmbed()
            .setColor("#00ceff")
            .setAuthor({ name: "Donate Page 💸 ", iconURL: `${client.user.avatarURL({ dynamic: true })}` })
            .setFooter({ text: `Developed By: !Genji#2626` })
            .setDescription("\n**Hey!** are you enjoying the bot?\nYou can support us and [Donate Here.](https://streamelements.com/genjineon/tip)");

        interaction.followUp({ embeds: [embed] })
    },
}; 