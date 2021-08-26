const { MessageEmbed } = require ('discord.js');
module.exports = {
    name: "botinfo",
    description: "informacje o bocie",
    async execute(message, args, Discord, Client) { {;

        const embed = new MessageEmbed()    
        .setColor('18181A')
        .setTitle('<:Jowish:879723037094711296> Informacje o mnie ')
        .setDescription('**Ogólne:**\nNazwa bota: `Jowish 💸`\nMój właściciel: `yovisek;]]#4444`')
        .addFields(
            { name: 'Statystyki:', value: 'Komendy `8`\nKanały: `19`'}
        )
        message.channel.send(embed);
        
            
        }
    }
}
// .setDescription('Mój właściciel: `yovisek;]]#4444`\n')      { name: '**Ogólne:**', value: 'Nazwa bota: `Jowish 💸`'}