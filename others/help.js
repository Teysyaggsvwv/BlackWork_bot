const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();
    .addField("General Commands", `\`help\`, \`ping\`, \`prefix\`, \`uptime\`, \`avatar\`, \`status\`, \`suggest\`, \`userinfo\`, \`serverinfo\`, \`botinfo\`, \`github\``)
    .addField("Music Commands", `\`filter\`, \`loop\`, \`lyrics\`, \`np\`, \`pause\`, \`play\`, \`queue\`, \`radio\`, \`remove\`, \`resume\`, \`search\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
    .addField("Moderation Commands", `\`kick\`, \`ban\`, \`mute\`, \`unmute\`, \`clear\`, \`lock\`, \`unlock\`, `)
    .addField("Fun Commands", `\`slap\`, \`hug\`, \`poke\`, \`pat\`, \`cuddle\`, \`feed\`, \`kiss\``)
    .addField("Gif Commands", `\`boygif\`, \`girlgif\`, \`couplegif\`, \`animegif\`, \`emojigif\`, \`animalgif\``)
    .addField("Banner Commands", `\`bboy\`, \`bgirl\`, \`banime\``)
    .addField("Games Commands", `\`rps\`, \`iq\`, \`howgay\`, \`8ball\`, \`rate\`, \`dicksize\``)
    helpEmbed.setTimestamp();

    let helpEmbed = new MessageEmbed()
    .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setColor(`#FF0000`)
    .setTitle("Commands")
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#F21313");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
