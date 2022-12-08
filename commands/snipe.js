const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const ourEmbed = new EmbedBuilder()
	.setColor(0x0099FF)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('snipe')
		.setDescription('Snipes the last deleted message.'),
	async execute(interaction) {
		const deleteHolder = interaction.client.snipeHolder.get("Deleted");
		if(deleteHolder){
			const author = deleteHolder.author
			ourEmbed.setAuthor({
				name: `${author.username}#${author.discriminator}`,
				iconURL: `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.png?size=256`,
				url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' 
			})
			ourEmbed.setDescription(deleteHolder.content)
			ourEmbed.setFooter({ text: `Message was deleted on: ${deleteHolder.createdTimestamp}` })
			await interaction.reply({ embeds: [ourEmbed] });
		}else{
			await interaction.reply('No deleted message to snipe...');
		}
	},
};