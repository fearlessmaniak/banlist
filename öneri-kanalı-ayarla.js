onst Discord = require('discord.js');
const db = require('quick.db')

module.exports = { name: 'öneri-ayarla',
                   enabled: true,
                   guildOnly: false,
                   aliases: ["istek-ayarla","öneri-kanal"],
                   permLevel: 4 ,
                  run : async (client, message, args) => {
  
if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**Üzgünüm bu komudu kullanmak için `Kanalları Yönet` yetkisine sahip olman gerek.**");
let reason = args.slice(1).join(' ')
 
var kanal = message.mentions.channels.first() 


if (args[0] == "sıfırla") {
  db.delete(`önerikanal_${message.guild.id}`)
  return message.channel.send(" **Önerilerin gönderileceği kanal sıfırlandı.**")
} else if (!kanal) {
  return message.channel.send(" **Lütfen bir kanal etiketleyiniz.**")
} else {
  db.set(`önerikanal_${message.guild.id}`, kanal.id)
  return message.channel.send(` **Önerilerin gönderileceği başarıyla ${kanal} olarak ayarlandı.** \n  \`\`Sıfırlamak için .öneri-ayarla sıfırla\`\` `)
}

 } 
 
}
