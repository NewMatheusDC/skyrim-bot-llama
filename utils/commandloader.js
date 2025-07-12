const fs = require('fs');
const path = require('path');
const { log } = require('./logger');

module.exports = {
    loadCommands: async (client) => {
        client.commands = new Map();
        const commandsPath = path.join(__dirname, '../commands');
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);

            if ('data' in command && 'execute' in command) {
                client.commands.set(command.data.name, command);
                log(`Comando carregado: ${command.data.name}`);
            } else {
                log(`[AVISO] O comando em ${filePath} está faltando propriedades necessárias.`, 'warn');
            }
        }
    }
};