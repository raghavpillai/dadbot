const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply(`🏓 Pong! API Latency is ${Math.round(interaction.client.ws.ping)}ms`);
	},
};