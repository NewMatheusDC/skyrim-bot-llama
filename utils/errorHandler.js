const { EmbedBuilder } = require('discord.js');
const { logError } = require('./logger');

module.exports = {
    handleInteractionError: async (interaction, error) => {
        logError(error, interaction);

        const embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle("❌ Erro no Comando de Skyrim")
            .setDescription(`Ocorreu um erro ao processar sua requisição:\n\`\`\`${error.message.substring(0, 1000)}\`\`\``)
            .addFields(
                { name: "Comando", value: interaction.commandName || "N/A" },
                { name: "Usuário", value: interaction.user.tag }
            );

        if (interaction.deferred || interaction.replied) {
            await interaction.editReply({ embeds: [embed], ephemeral: true });
        } else {
            await interaction.reply({ embeds: [embed], ephemeral: true });
        }
    },

    handleLlamaError: (error) => {
        logError(error, "LlamaService");
        // Reconexão automática para erros de modelo
        if (error.message.includes("context")) {
            require('../services/llama.service').initialize();
        }
    }
};