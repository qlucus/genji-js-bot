const warnModel = require("../../models/warnModel");
const moment = require("moment");
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: "warnings",
    description: "display all warnings that a user has",
    options: [
        {
            name: "target",
            description: "user you want to view warnings on",
            type: "USER",
            required: true,
        }
    ],

    run: async(client, interaction) => {
        const user = interaction.options.getUser("target");

        const userWarnings = await warnModel.find({ userId: user.id, guildId: interaction.guildId, 
        }); 

        if(!userWarnings?.length) return interaction.followUp({ content: `${user} has no warnings in the server` });
        const embedDescription = userWarnings.map((warn) => {
            const moderator = interaction.guild.members.cache.get(warn.moderatorId);

            return[
                `**Warn ID:** ${warn._id}`,
                `**Moderator ID:** ${moderator.id || "has left"}`,
                `**Reason:** ${warn.reason}`,
                `**Date:** ${moment(warn.timestamp).format('LLLL')}`,
            ].join("\n");
        }).join("\n─────────────────\n");

        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel(`Total Warns: ${userWarnings.length}`)
					.setStyle('SECONDARY')
                    .setDisabled(true)
			);

        const embed = new MessageEmbed()
            .setAuthor({ name: `${user.tag} | Warnings Page`, iconURL: `${user.avatarURL({ dynamic: true })}` })
            .setDescription(embedDescription)
            .setColor("#ffa700")
            .setTimestamp()
            .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.avatarURL({ dynamic: true })}` });
        interaction.followUp({ embeds: [embed], components: [row] });
    },
};