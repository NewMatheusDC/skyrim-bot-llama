// Adicione no topo:
const { loadCommands } = require('./utils/commandLoader');
const { handleInteractionError } = require('./utils/errorHandler');
const skyrimService = require('./services/skyrim.service');

// Modifique o handler de interações:
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    try {
        const command = client.commands.get(interaction.commandName);
        await command.execute(interaction);
    } catch (error) {
        await handleInteractionError(interaction, error);
    }
});
const { Client } = require('discord.js');
const { loadCommands } = require('./utils/commandLoader');
const config = require('../config/config.json');

const client = new Client({ /* intents */ });

// Inicialização
client.once('ready', async () => {
    console.log(`Bot conectado como ${client.user.tag}`);
    await loadCommands(client);
});

// Handler de interações
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
    try {
        const command = client.commands.get(interaction.commandName);
        await command.execute(interaction);
    } catch (error) {
        // Tratamento de erro
    }
});

client.login(config.token);