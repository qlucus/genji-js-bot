const {
    Message,
    Client,
    MessageEmbed
} = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "giveaway",
    aliases: ['ga'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const messageArray = message.content.split(" ");
        var item = "";
        var time;
        var winnerCount;
        for (var i = 1; i < args.length; i++) {
            item += (args[i] + " ");
        }
        time = args[0];
        if (!time) {
            return message.channel.send(`Invalid duration provided`);
        }
        if (!item) {
            item = "No title"
        }
        var embed = new MessageEmbed();
        embed.setColor(0x3333ff);
        embed.setTitle("New Giveaway !");
        embed.setDescription("**" + item + "**");
        embed.addField(`Duration : `, ms(ms(time), {
            long: true
        }), true);
        embed.setFooter("React to this message with 🎉 to participate !");
        var embedSent = await message.channel.send({ embeds: [embed] });
        embedSent.react("🎉");

        setTimeout(async () => {
            try {
                const peopleReactedBot = await embedSent.reactions.cache.get("🎉").users.fetch();
                var peopleReacted = peopleReactedBot.array().filter(u => u.id !== client.user.id);
            } catch (e) {
                return message.channel.send(`An unknown error happened during the draw of the giveaway **${item}** : ` + "`" + e + "`")
            }
            var winner;

            if (peopleReacted.length <= 0) {
                return message.channel.send(`Not enough participants to execute the draw of the giveaway **${item}** :(`);
            } else {
                var index = Math.floor(Math.random() * peopleReacted.length);
                winner = peopleReacted[index];
            }
            if (!winner) {
                message.channel.send(`An unknown error happened during the draw of the giveaway **${item}**`);
            } else {
                console.log(`Giveaway ${item} won by ${winner.toString()}`)
                message.channel.send(`🎉 **${winner.toString()}** has won the giveaway **${item}** ! Congratulations ! 🎉`);
            }
        }, ms(time));
    },
};