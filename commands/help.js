const { MessageEmbed } = require ('discord.js');
module.exports = {
    name: "help",
    description: "komendy bota",
    async execute(message, args, Discord, Client) { {

        const embed = new MessageEmbed()    
        .setColor('18181A')
        .setTitle('<:Jowish:879723037094711296> To są wszystkie moje polecenia! ')
        .setDescription('Prefix: `!`')
        .addFields(
            { name: `**4FUN**`, value: '`8ball`, `lis`, `psc`, `rzutkostka`, `avatar`' },
        )
        message.channel.send(embed);
        
            
        }
    }
}