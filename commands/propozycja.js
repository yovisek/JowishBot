const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "propozycja",
    description: "propozycja!",
    async execute(message, args, Discord, Client) { {


        if(message.content.includes('@everyone') || message.content.includes('here')) return;

        const channel = message.guild.channels.cache.get('880269383170154496');

        const suggestion = args.join(' ');
        if(!suggestion) return message.channel.send(new MessageEmbed()
        .setTitle("<a:nie:879740195694596177> ERROR!")
        .setColor("EB0027")
        .setDescription("Nie podałeś treści propozycji!")
        .setFooter(`Komendy użył: ${message.author.tag}`)
        .setTimestamp())

        let embed2 = new MessageEmbed()
        .setTitle('<a:tak:879740195535192074> Udało się!')
        .setColor('00EB24')
        .setDescription ('Propozycja została wysłana!')
        .setFooter('Dodane:')
        .setTimestamp()
       message.channel.send(embed2)
       const embed = new Discord.MessageEmbed()
        .setColor('18181A')
        .setTitle('Nowa Propozycja!')
        .setDescription(`${suggestion}`)
        .setTimestamp()
        .addFields(
            { name: `**Dodał/a:**`, value: message.author.tag}
        )
        .setFooter(`Dodane:`)
        
        
                channel.send(embed).then(m =>{
                    m.react('<a:tak:879740195535192074>');
                    m.react('<a:nie:879740195694596177>');
                })            
    }
}
}
