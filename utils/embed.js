const { EmbedBuilder } = require('discord.js');

function createSkyrimEmbed({ title, description, fields = [] }) {
    return new EmbedBuilder()
        .setColor(0x4B8BBE) // Azul temático de Skyrim
        .setTitle(title)
        .setDescription(description)
        .addFields(fields)
        .setFooter({ text: 'Fonte: IA Llama - Conhecimento de Skyrim' })
        .setTimestamp();
}

module.exports = { createSkyrimEmbed };