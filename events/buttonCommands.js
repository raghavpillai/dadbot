const { Events } = require('discord.js');

const USER_ID = "1046859178683142144"

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isButton()) return;
		
		interaction.update({ components: [] });
		const command = interaction.client.commands.get("truth");
		command.execute(interaction.message, interaction.user)
	},
};