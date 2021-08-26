const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const fs = require('fs')
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
 
 
client.once('ready', () =>{
    console.log('Jowish is online!');
});

client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.cache.find(c => c.id ==="879729026330165279")
    let embed = new Discord.MessageEmbed()
      .setColor('00EB24')
      .setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic: true}))
      .setTitle(`Powitajmy nowego użytkownika! 👋`)
      .setThumbnail(`https://cdn.discordapp.com/attachments/878206924989026345/879357503782129664/xsgdh_-_Imgur.png`)
      .setDescription(`<@${member.id}> Dołączył do naszego serwera!`)
        .setTimestamp()
        .addFields(
            { name: `**Data utworzenia konta:**`, value: new Date(member.user.createdTimestamp).toLocaleDateString(),}
        )
        
      .setFooter(`Na naszym serwerze jest teraz ${member.guild.memberCount} osób!`)
  
      channel.send(embed)
      });

      client.on('guildMemberAdd', member => {
        let embed = new Discord.MessageEmbed()
        .setTitle("<:Jowish:879723037094711296> Witamy na discordzie Jowish Community!")
        .setDescription("<a:strzalka:879722971130908704> Trzymaj link jakbyś zgubił https://discord.gg/qF4rGJwy")
        .setColor("18181A")
        .setFooter("Jowish Community", member.client.user.displayAvatarURL())
        .setTimestamp()
        member.send(embed)
    })

      client.on("guildMemberRemove", (member) => {
        let channel = member.guild.channels.cache.find(c => c.id ==="879729026330165279")
        let embed = new Discord.MessageEmbed()
          .setColor('EB0027')
          .setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic: true}))
          .setTitle(`Pożegnajmy ${member.user.tag}`)
          .setThumbnail(`https://cdn.discordapp.com/attachments/878206924989026345/879357503782129664/xsgdh_-_Imgur.png`)
          .setDescription(`<@${member.id}> Wyszedł z naszego serwera. 😥`)
            .setTimestamp()
            .addFields(
                { name: `**Data utworzenia konta:**`, value: new Date(member.user.createdTimestamp).toLocaleDateString(),}
            )
            
          .setFooter(`Na naszym serwerze jest teraz ${member.guild.memberCount} osób!`)
      
          channel.send(embed)
          });
 
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
 
 
client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'psc') {
        client.commands.get('psc').execute(message, args);
    } else if (command === 'propozycja') {
        client.commands.get('propozycja').execute(message, args, Discord);
    } else if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args, Discord);
    } else if (command === 'lis') {
      client.commands.get('lis').execute(message, args, Discord);
    } else if (command === 'rzutkostka') {
      client.commands.get('rzutkostka').execute(message, args, Discord);
    } else if (command === '8ball') {
      client.commands.get('8ball').execute(message, args, Discord);
    } else if (command === 'help') {
      client.commands.get('help').execute(message, args, Discord);
    } else if (command === 'botinfo') {
      client.commands.get('botinfo').execute(message, args, Discord);
    } 
    
});
 
 
client.login('ODc1MDY4NDA3Njg1NDYwMDY4.YRQI9g.gTxzKgPV9RJWUNapUZToqcWavZQ');