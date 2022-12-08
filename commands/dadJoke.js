const { SlashCommandBuilder } = require('discord.js');
const jokes = require('../data/dadjokes.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dadjoke')
		.setDescription('Replies with a dadjoke'),
	async execute(interaction) {
        let index = Math.floor(Math.random() * jokes.length)
		await interaction.reply(jokes[index]);
	},
};