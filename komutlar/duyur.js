const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let kanal = message.mentions.channels.first();
    if(!message.member.roles.has('751153335423467800')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')
    let duyurumetni = args.join(" ").slice(22);
    if(!kanal) return message.channel.send(":bell: Hata bir kanal etiketlemelisini!");
  if(!duyurumetni) return message.channel.send(":loudspeaker: Hata duyuru metni yazmalısınız!");
  message.delete();
  message.channel.send(":mega: Başarıyla duyuruldu!");
    kanal.createWebhook("Divan Duyuru", "https://media.discordapp.net/attachments/749648576241598546/751092974737162270/3hilal-kirmizi-uchilal-2017-bozkurtlarfm.png?width=320&height=331")
    .then(webhook => webhook.edit("Divan Duyuru", "https://media.discordapp.net/attachments/749648576241598546/751092974737162270/3hilal-kirmizi-uchilal-2017-bozkurtlarfm.png?width=320&height=331")
        .then(wb => {
            const duyurucuPing = new Discord.WebhookClient(wb.id, wb.token);
            duyurucuPing.send( duyurumetni + "\n@everyone")
            duyurucuPing.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'duyuru',
  description: 'Duyurucu',
  usage: 'duyuru'
};