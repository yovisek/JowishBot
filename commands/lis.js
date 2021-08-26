const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "lis",
  aliases: [],
  description: "random fox image",
  async execute(message, args, Discord, client) {
    const res = await fetch("https://randomfox.ca/floof/");
    const img = (await res.json()).image;
    const embed = new MessageEmbed()
      .setTitle("🦊  Losowe zdjęcie lisa:  🦊")
      .setImage(img)
      .setFooter(
        message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  },
};