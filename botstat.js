const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
module.exports = { 
                   name: "istatistik",
                   enabled: true,
                   guildOnly: false,
  aliases: [ 'bi', 'botistatistik', 'botstat', 'bs'],
                   permLevel: 0 ,
 run: async (bot, message, args) => {
   const calismavakiti = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const botistatistikleri = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setFooter('Era Code', bot.user.avatarURL)
  .addField(" **İstatistikleri**", "Sunucunuz İçin En İyisi")
  .addField("**Botun Geliştiricisi**",  " <@Bot Gelistirici Id>")
  .addField("**Çalışma süresi**", calismavakiti)
  .addField("**CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
.addField("**Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("**Ping**", bot.ping+" ms", true)
  .addField("**Bit**", `\`${os.arch()}\``, true)
 return message.channel.send(botistatistikleri);
  }
}
