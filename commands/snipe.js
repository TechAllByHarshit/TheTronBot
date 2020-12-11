module.exports = {
    name: 'snipe',
    description: 'shows last deleted message in that channel',
    execute(message, args, bot, Discord) {
        let msg = bot.snipes.get(message.channel.id);
        if (!msg) return message.channel.send("There is no deleted message in this channel.");
        let snipEMbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthir(msg.author, msg.author.displayAvatarURL)
        .setDescription(msg.content)
        .setImage(msg.image?msg.image:null)
        .setTimestamp();
        message.channel.send(snipEMbed);
    }
}
