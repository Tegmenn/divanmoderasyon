const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      let silmek = args[0]

   if (!silmek) {
     const sa = new Discord.MessageEmbed()
    .setDescription('discord.gg/')
    .setTimestamp()
return message.channel.send(sa)  
  }
  if (isNaN(silmek)) {
 const sa3 = new Discord.MessageEmbed()
    .setDescription('Silme Değeri Sadece Rakamlardan Oluşabilir')
    .setTimestamp()
return message.channel.send(sa3)  
  }
if (silmek > 500) {
 const sa2 = new Discord.MessageEmbed()
    .setDescription('500 Den Fazla Silemem')
    .setTimestamp()
return message.channel.send(sa2)  
  }  
  
  message.channel.bulkDelete(silmek).then(() =>  {
   message.channel.send(` **${silmek} Kadar Mesaj __<@${message.author.id}>__ Tarafından Silindi**`)

  })
  
  
}

exports.conf = {
  
  aliases: ['temizle', 'sil'],
  permLevel: 0
};

exports.help = {
  name: 'temizle'
};