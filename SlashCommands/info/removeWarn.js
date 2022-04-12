/**const warnModel = require("../../models/warnModel");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "remove-warn",
    description: "remove a warn using an ID",
    userPermissions: ["MANAGE_MESSAGES"],
    options: [
        {
            name: "target",
            description: "user",
            type: "USER",
            required: true,
        },
        {
            name: "warnid",
            description: "warnId that you warn to delete",
            type: "STRING",
            required: true,
        },
    ],

    run: async(client, interaction) => {
        const Target = interaction.options.getUser("target");
        const warnId = interaction.options.getString("warnid");

        const data = await warnModel.findById(warnId);

        if(!data) return interaction.followUp({ content: `${warnId} is not a valid ID`, });

        data.delete();

        const user = interaction.guild.members.cache.get(data.userId);
        
        const embed = new MessageEmbed()
            .setColor("#00ceff")
            .setAuthor({ name: `${Target.tag} has been unwarned`, iconURL: `${Target.avatarURL({ dynamic: true })}` })
            .setDescription(`**Moderator:** \`${interaction.user.tag}\` **(<@${interaction.member.id}>)**`);

        interaction.followUp({ embeds: [embed] });
    },
};**/