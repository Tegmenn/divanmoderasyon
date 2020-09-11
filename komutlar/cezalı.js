const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
 if(!message.member.roles.has('749277951631163534')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')
  
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  let al = "751153544815444118"; ///alınacak rol idsi
  let al2 = "745589941983117435"; ///alınacak rol idsi
  let ver = "745589944738644018"; ///verilecek rol idsi
  if (!member) return message.channel.send("Bir Kullanıcı Etiketle");
  
    member.addRole(ver);
    member.removeRole(al);
    member.removeRole(al2);

  

  const embed = new Discord.RichEmbed()
    .setTitle("Cezalı Sistemi")
    .setDescription( `**Cezalı Verilen Kullanıcı** : **${member}**`)
client.channels.get('751154000035840031').send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["c" , "cezalı"],
  permLevel: 0
}
exports.help = {
  name: 'cezalı',
  description: "Cezalı rolü salar",
  usage: 'cezalı'
} 