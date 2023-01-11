const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const jokes = require('../data/dadjokes.json')

function exampleEmbed(title, joke){
	return new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(title)
	.addFields(
		{ name: 'Click to Reveal!', value: `||${joke}||`},
	)
	.setTimestamp()
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dadjoke')
		.setDescription('Replies with a Dad Joke or a Bad Joke?'),
	async execute(interaction) {
		const url = 'https://www.reddit.com/r/dadjokes/random.json?t=all'
		const joke = (await (await fetch(url)).json());
		interaction.reply({embeds: [exampleEmbed(joke[0].data.children[0].data.title, joke[0].data.children[0].data.selftext)]})
	},
};