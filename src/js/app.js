class Settings {
    constructor() {
        // Настройки по умолчанию
        this.defaultSettings = new Map([
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy']
        ]);
        
        // Пользовательские настройки (изначально пустые)
        this.userSettings = new Map();
    }

    // Метод для обновления пользовательских настроек
    set(setting, value) {
        this.userSettings.set(setting, value);
    }

    // Геттер, который возвращает комбинированный Map
    get settings() {
        // Создаём копию defaultSettings и добавляем туда userSettings
        const combinedSettings = new Map(this.defaultSettings);
        this.userSettings.forEach((value, key) => {
            combinedSettings.set(key, value);
        });
        return combinedSettings;
    }
}
  
module.exports = { Settings };
