const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
 if(!message.member.roles.has('751120317795008522')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')
  
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  let al = ""; ///alınacak rol idsi
  let ver = "745589938602377227"; ///verilecek rol idsi
  if (!member) return message.channel.send("Bir Kullanıcı Etiketle");
  
    member.addRole(ver);
    member.removeRole(al);
  

  const embed = new Discord.RichEmbed()
    .setTitle("Tag Sistemi")
    .setDescription( `**Rol Verilen Kullanıcı** : **${member.user}**`)
client.channels.get('753231148657672283').send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["t" , "tag"],
  permLevel: 0
}
exports.help = {
  name: 'team',
  description: "Team rolü salar",
  usage: 'team'
} 