const { SlashCommandBuilder } = require('discord.js');
const LlamaService = require('../services/llama.service');
const { createSkyrimEmbed } = require('../utils/embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lore')
        .setDescription('Pergunte sobre a lore de Skyrim')
        .addStringOption(option =>
            option.setName('topico')
                .setDescription('Tópico de lore')
                .setRequired(true)),
    
    async execute(interaction) {
        await interation.deferReply();
        const topic = interaction.options.getString('topico');
        
        const response = await LlamaService.generateResponse(
            `Explique detalhadamente sobre ${topic} no universo de Skyrim`
        );
        
        const embed = createSkyrimEmbed({
            title: `Lore: ${topic}`,
            description: response
        });
        
        await interaction.followUp({ embeds: [embed] });
    }
};