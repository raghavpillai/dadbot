const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		const args = message.content.trim().split(/ +/g);
		if((args[0].toLowerCase() == 'i\'m' || args[0].toLowerCase() == 'im') && (args[1])){
			message.reply(`Hi ${args.slice(1).join(' ')}, I'm dad!`);
		}
	},
};