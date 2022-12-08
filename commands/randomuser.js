const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const truths = require('../data/truths.json')

const ourEmbed = new EmbedBuilder()
	.setColor(0x0099FF)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('randomuser')
		.setDescription('Gets a random user from the discord.'),
	async execute(interaction) {
        const members = await interaction.guild.members.list()
		//console.log(members)
		for (member of members){
			console.log(member)
		}
		await interaction.reply("Not finished yet")
	},
};