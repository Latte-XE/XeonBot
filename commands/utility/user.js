const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides user information.'),
    async execute(interaction) {
        await interaction.reply(`This command is executed by ${interaction.user.username}, who joined this server in ${interaction.member.joinedAt}`)
    },
};