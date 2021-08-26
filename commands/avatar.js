const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Brodcast someone's avatar",

    async execute(message, args, Discord, Client) { {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({dynamic: true}) 

        const embed = new Discord.MessageEmbed()
        .setTitle(`avatar ${member.username}`)
        .setImage(avatar)
        .setColor("18181A")
        .setFooter("")
        .setTimestamp()

        message.channel.send(embed);
    }
}
}