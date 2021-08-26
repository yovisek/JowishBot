const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'rzutkostka',
    aliases: [],
    description: 'rzut kostka!!!',
    usage: 'rzutkostka',
    botPermissions: [],
    userPermissions: [],
    async execute(message, args, Discord, client) { {
        const generateNumber = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }


        
       
        const embed = new MessageEmbed()    
        .setColor('18181A')
        .setTitle('🎲 Rzut kostką 🎲')
        .setDescription(`<@${message.member.id}>, wypadło Ci: ${generateNumber(1, 6)}`)
        .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
      }
    }
}