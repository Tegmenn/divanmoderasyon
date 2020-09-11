const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
 if(!message.member.roles.has('749277951631163534')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')
  
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  let al = ""; ///alınacak rol idsi
  let ver = "745594795870781500"; ///verilecek rol idsi
  if (!member) return message.channel.send("Bir Kullanıcı Etiketle");
  
    member.addRole(ver);
    member.removeRole(al);
  

  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle("Special Sistemi")
    .setDescription( `Special Verilen Kullanıcı : **${member.user}**`)
client.channels.get('751154000035840031').send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["vip" , "v"],
  permLevel: 0
}
exports.help = {
  name: 'vip',
  description: "Special rolü salar",
  usage: 'special'
} 