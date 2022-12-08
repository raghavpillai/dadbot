const { SlashCommandBuilder } = require('discord.js');
const jokes = require('../data/codingjokes.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('codingjoke')
		.setDescription('Replies with a coding joke'),
	async execute(interaction) {
        let index = Math.floor(Math.random() * jokes.length)
		await interaction.reply(jokes[index]);
	},
};