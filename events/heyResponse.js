const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.mentions.users.has(message.client.user.id) && message.author.id != message.client.user.id) {
			message.reply("Hey!")
		}
	},
};