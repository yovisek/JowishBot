const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'psc',
    aliases: [],
    description: 'Generuje kod psc',
    usage: 'psc',
    botPermissions: [],
    userPermissions: [],
    async execute(message, args, Discord, client) { {
        const generateNumber = () => {
            return Math.floor(Math.random() * 10)
        }

        let psc = '0'

        for(let i = 0; i < 15; i++) {
            psc += `${generateNumber()}`

            if((i % 4 == 2) && i != 14) psc += '-'
        }
       
        const embed = new MessageEmbed()    
        .setColor('18181A')
        .setTitle('Nowy kod psc')
        .setDescription(`Legenda głosi, że jakiś kod psc działa.\n\nTwój kod: ||${psc}||`)
    
        let embed2 = new MessageEmbed()
        .setTitle('Kod psc')
        .setColor('18181A')
        .setDescription ('Kod został wysłany na prywatną wiadomość')
       message.channel.send(embed2)
  message.author.send(embed)
     }
 }
}