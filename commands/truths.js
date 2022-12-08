const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const truths = require('../data/truths.json')

const ourEmbed = new EmbedBuilder()
	.setColor(0x0099FF)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('truth')
		.setDescription('Sends a question for you to answer.'),
	async execute(interaction, passedUser="") {
        let index = Math.floor(Math.random() * truths.length)
		const author = interaction.user || passedUser
		ourEmbed.setAuthor({
			name: `Requested by ${author.username}#${author.discriminator}`,
			iconURL: `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.png?size=256`,
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' 
		})
		ourEmbed.setDescription(truths[index])
		
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('truth_button')
					.setLabel('Truth')
					.setStyle(ButtonStyle.Primary),
			);
		
		await interaction.reply({ embeds: [ourEmbed], components: [row] });
	},
};