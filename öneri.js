const Discord = require('discord.js');
const db = require('quick.db')
module.exports = {  name: 'öneri',
                    enabled: true,
                    guildOnly: false,
                    aliases: ["istek","öneri"],
                    permLevel: 0,
  run : async (client, message, args) => {
 
    var ökanal = await db.fetch(`önerikanal_${message.guild.id}`)
    var önerikanalı = message.guild.channels.cache.find(channel => channel.id === ökanal)
    if (!ökanal) return message.channel.send(" **Maalesef Bir Öneri Kanalı Ayarlanmamış.** `Ayarlamak İçin .öneri-kanal #kanal` ")

var oneri = args.join(" ").slice(0)
if (!oneri) {
    message.channel.send("**Yanlış Kullanıyorsun. Merak Etme Ben Burdayım ** \n `Örnek: .öneri {öneriniz}`")
  
  return
} else {
    const embed = new Discord.MessageEmbed()
    .setTitle("Yeni Bir Öneri Var!")
    .addField("Öneren Kullanıcı:", `<@!${message.author.id}>`)
    .addField(` Öneri`, oneri)
  .setColor("RED")
     .setTimestamp()
.setThumbnail(client.user.displayAvatarURL()) 
.setFooter(`Developed By Era`)
    
önerikanalı.send(embed).then(m => {
    m.react("👍")
    m.react("👎")})
}

  message.channel.send(`**Öneriniz başarıyla alındı!** \n _Önerin ${önerikanalı} kanalına düştü_`)

 } 
                 }
