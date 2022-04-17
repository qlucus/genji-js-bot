const { MessageEmbed, WebhookClient } = require('discord.js');
const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/965048927009251408/2a55_LWmXn3kw23eoQGeHz2Zt39qhwun-QL-xwi35wok5mMVWp66d7JlL3wIzl0rjfb9' });

module.exports = {
    name: "anon",
    aliases: ['anon'],
    execute (client, message, args)  {
        message.delete();
        const anon = args.join("")

        const embed = new MessageEmbed()
            .setTitle('Anonymous')
            .setDescription(anon)
            .setColor('#000305');

       webhookClient.send({
           content: '**Anonymous**',
           username: 'Anonymous',
           avatarURL: 'https://media.discordapp.net/attachments/738901088526401537/957932363441131530/Screenshot_25.png',
           embeds: [embed],
        });
    },
};