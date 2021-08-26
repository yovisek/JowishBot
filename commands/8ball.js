const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "8ball",
  aliases: [],
  user: {
    permissions: [],
    requiredRoles: [],
  },
  description: {
    usage: "8ball",
  },
  execute: async (message, args, Discord, client) => {
    const answers = [
      "Tak, ale nie jestem pewien.",
      "Nie, ale nie jestem pewien.",
      "I ty się mnie oto pytasz?",
      "Nie znam odpowiedzi.",
      "Nie mogę rozwiązać pytania.",
      "Daj mi dłuższą chwilę...",
      "Nie mam teraz czasu.",
      "Daj mi spokój!",
      "Nie licz na to.",
      "To zależy.",
      "Moja odpowiedź to nie.",
      "Może zapytaj później.",
      "Nie mogę ci teraz powiedzieć.",
      "Moje źródła mówią nie.",
      "Tak.",
      "Nie.",
      "Lepiej będzie, jak ci nie powiem.",
      "Sam sobie odpowiedz.",
      "Oczywiście, że tak.",
      "Oczywiście, że nie.",
      "Hej, co tam u Ciebie mordko?",
      "Jak dobrze to dobrze",
      "Bez kitu! XD",
      "uwu baka uwu!",
    ];

    const question = args.join(' ');
    if(!question) return message.channel.send(new MessageEmbed()
    .setTitle("<a:nie:879740195694596177> ERROR!")
    .setColor("EB0027")
    .setDescription("Nie podałeś pytania!")
    .setFooter(`Komendy użył: ${message.author.tag}`)
    .setTimestamp())

    const answer = answers[Math.floor(Math.random() * answers.length)];

    const embed = new MessageEmbed()
      .setColor("18181A")
      // .setAuthor(message.author.displayAvatarURL({ dynamic: true }), `Odpowiedź na pytanie.`)
      .addFields(
        { name: "Pytanie: ", value: question },
        { name: "Odpowiedź: ", value: `${answer}` }
      )
      .setFooter(`2021 © ${message.client.user.tag}`, message.client.user.avatarURL({ dynamic:true }))
      .setTimestamp();

    message.channel.send(embed);
  },
};