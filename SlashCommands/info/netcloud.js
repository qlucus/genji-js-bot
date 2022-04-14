const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "faq",
    description: "About NetCloud 🤖",
    run: async(client, interaction) => {
        const embed = new MessageEmbed()
            .setColor("#fff700")
            .setAuthor({ name: "FAQ: About NetCloud", iconURL: `https://media.discordapp.net/attachments/961883143411998752/964291071100198992/752SHABOTA.png?width=676&height=676` })
            .setFooter({ text: `NetCloud Company 🤖` })
            .addFields({ name: "Who are you?", value: "We are a company.", inline: false })
            .addFields({ name: "What the bot can do?", value: "undefind", inline: false })
            .addFields({ name: "When the company have started?", value: "April 11, 2022", inline: false })
            .addFields({ name: "What is your goal?", value: "Our goal is reaching 100 servers.", inline: false });

        interaction.followUp({ embeds: [embed] })
    },
}; 