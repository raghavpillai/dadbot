const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const ourEmbed = new EmbedBuilder()
	.setColor(0x0099FF)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('esnipe')
		.setDescription('Snipes the last edited message.'),
	async execute(interaction) {
		const editedHolder = interaction.client.snipeHolder.get("Edited");
		if(editedHolder){
			const author = editedHolder.author
			ourEmbed.setAuthor({
				name: `${author.username}#${author.discriminator}`,
				iconURL: `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.png?size=256`,
				url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' 
			})
			ourEmbed.setDescription(editedHolder.content)
			ourEmbed.setFooter({ text: `Message was edited on: ${editedHolder.createdTimestamp}` })
			await interaction.reply({ embeds: [ourEmbed] });
		}else{
			await interaction.reply('No edited message to snipe...');
		}
	},
};