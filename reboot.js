const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json") 

module.exports = { name: 'reboot',
                   aliases: ["r","reboot","yenile","yeniden başlat"],
                   enabled: true,
                  guildOnly: false,
                  permLevel: 4
  run : async (bot, message, args) => {
    if(message.author.id !== "BotSahibiId") return message.channel.send("bunu sadece sahibim kullanabilir")
    
    message.channel.send(`Yeniden başlatılıyor...`).then(msg => {
    console.log(`Console: Yeniden başlatılıyor...`);
    process.exit(0);
  })
    
          
}
}
