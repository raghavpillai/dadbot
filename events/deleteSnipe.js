const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageDelete,
	async execute(message) {
		message.client.snipeHolder.set("Deleted", message)
	},
};