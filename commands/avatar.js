module.exports = {
    name: 'avatar',
    type: 'fun',
    usage: `&{prefix}avatar <user's mention (optional)>`,
    description: 'shows the user\'s avatar',
    aliases: ["a"],
    permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
    async execute(message, args, bot, Discord, prefix) {
        const mentionUser = message.mentions.users.first() || bot.users.cache.get(args[0]) || bot.users.cache.find(user => user.username == args.join(" ")) ||message.author;
        const avataremb = new Discord.MessageEmbed()
        .setColor("#D441EE")
        .setAuthor(`${message.author.username}`,`${message.author.displayAvatarURL({dynamic: true})}`);
        avataremb.setImage(`${mentionUser.displayAvatarURL({size: 4096, dynamic: true})}`)
        .setTitle(`${mentionUser.tag}'s Avatar`);
        message.channel.send(avataremb);
    }
}
