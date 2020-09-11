const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'd!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('Red')
.addField(' Bot Komutları',`
**d!nick** : Nick Değiştirmeye yarar sadece boosterler kullanabilir.
**d!say** : Sunucudaki Üye Grafiğini Atar
**d!dmduyur** : Sunucudaki Tüm Kullanıcılara Dm Den Mesaj Yollarsınız
**d!duyuru** : Belirtilen Kanala Duyuru Atarsınız
**d!vip** : Special rolü salar sadece yetkililer kullanabilir
**d!kilit ** : Sohbeti İstediğiniz Süre Boyunca Kilitler
**d!sohbet aç** : Sohbeti Açar
**d!sohbet kapat** : Sohbet Kapat'`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setİmage('https://media.discordapp.net/attachments/745589982214750240/748878419315654676/20181024_174000.jpg?width=173&height=173')
 message.channel.send(env) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['yardım', 'help'], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
