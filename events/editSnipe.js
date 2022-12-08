const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageUpdate,
	async execute(message) {
		message.client.snipeHolder.set("Edited", message)
	},
};