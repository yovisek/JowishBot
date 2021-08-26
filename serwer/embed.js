const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "embed",
    aliases: [],
    description: 'create an embed',
    async execute(message, args, Discord, client) {
        const embedChannel = message.mentions.channels.first();
        if(!embedChannel) {
            message.channel.send('⚠ Kanał nie został oznaczony! ⚠')
            return;
        }

        const content = args.slice(1).join(' ')

        // Opcje Embeda;
        let embedColor = content.split('|')[0];
        if(!embedColor) {
            message.channel.send('⚠ Kolor embeda nie został podany! ⚠');
            return;
        }

        let embedTitle = content.split('|')[1];
        if(!embedTitle) {
            message.channel.send('⚠ Nie podałeś tytułu! ⚠')
            return;
        }

        let embedDescription = content.split('|')[2];
        if(!embedDescription) {
            message.channel.send('⚠ Nie podałeś treści embeda! ⚠');
            return;
        }

        // Finalne tworzenie embeda;
        let embed = new messageEmbed()
        .setTitle(embedColor)
        .setTitle(embedTitle)
        .setDescription(embedDescription)
        .setFooter(
            `${message.author.tag} | ${message.author.id}`,
             message.author.displayAvatarURL({ dynamic: true})
        );

        embedChannel.send(embed);
    },
};

// !embed <wzmianka kanału> kolorwHexach|to jest wiadomość|to jest opis