const loreData = require('../../data/skyrim-lore.json');
const questsData = require('../../data/skyrim-quests.json');

module.exports = {
    getLoreInfo: (topic) => {
        const entry = loreData.find(entry => 
            entry.keywords.some(kw => topic.toLowerCase().includes(kw))
        return entry || null;
    },

    getQuestInfo: (questName) => {
        return questsData.find(q => 
            q.name.toLowerCase().includes(questName.toLowerCase())) || null;
    },

    generateBuild: (classe, dificuldade = 'medium') => {
        // Lógica para gerar builds baseada em templates
        const templates = {
            warrior: { /* ... */ },
            mage: { /* ... */ }
        };
        return templates[classe] || "Build não encontrada";
    }
};