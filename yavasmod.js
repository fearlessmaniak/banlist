const Discord = require('discord.js');
module.exports ={ name: 'yavaş-mod',
                  enabled: true,
                  guildOnly: true,
aliases: ["slow-mode","slowmode","yavas-mod",'yavasmod','yavaşmod'],
                  permLevel: 3,
                  run : async(client, message, args) => {
      if (!args[0])
      return message.channel.send(`
        Yazı Kanalıını Yavaş Moda Almam İçin Bir Sayı Yazmalısın
      `);
  if (args[0] > 1000) return message.channel.send("Slowmode en fazla 1000 olabilir.")
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason = message.content.slice( );
    if (!reason) {
      reason == "✔️";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(`
      Artık bu kanala **${args[0]}** saniyede bir mesaj yazılabilecek.
    `);
}
 }
