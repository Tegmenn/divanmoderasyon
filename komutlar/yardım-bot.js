 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Loxy-BOT | Bot Komutları`, client.user.avatarURL) 
      .setDescription('**[Discord](https://discord.gg/3K9Mm4B)**')/////ÖGÜN SERT DESTEK EKİBİ VENQTM İLETŞİM:   OgünSert | Kobs#2738
.setThumbnail(client.user.avatarURL)/////ÖGÜN SERT DESTEK EKİBİ VENQTM İLETŞİM:   OgünSert | Kobs#2738
      .addField('**💥Komutlar:**', '`d!radyo <sayı>: radyoyu kullanmıza yarar`, `d!radyo kapat: radyoyu kapatmanıza yarar`, `d!help : Radyo Bilgi`')/////ÖGÜN SERT DESTEK EKİBİ VENQTM İLETŞİM:   OgünSert | Kobs#2738
    .setFooter(``, client.user.avatarURL)/////ÖGÜN SERT DESTEK EKİBİ VENQTM İLETŞİM:   OgünSert | Kobs#2738
    .setTimestamp()/////ÖGÜN SERT DESTEK EKİBİ VENQTM İLETŞİM:   OgünSert | Kobs#2738
    message.channel.send(juke).catch()/////ÖGÜN SERT DESTEK EKİBİ VENQTM İLETŞİM:   OgünSert | Kobs#2738

};/////ÖGÜN SERT DESTEK EKİBİ VENQTM İLETŞİM:   OgünSert | Kobs#2738


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};