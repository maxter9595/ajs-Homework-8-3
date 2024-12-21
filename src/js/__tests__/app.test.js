const { Settings } = require('../app');

describe('Settings', () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  test('should return default settings initially', () => {
    // Проверяем, что по умолчанию настройки совпадают с заданными
    expect(settings.settings).toEqual(
      new Map([
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy']
      ])
    );
  });

  test('should allow setting user preferences', () => {
    settings.set('theme', 'light');
    settings.set('music', 'rock');

    const expectedSettings = new Map([
      ['theme', 'light'],
      ['music', 'rock'],
      ['difficulty', 'easy']
    ]);

    expect(settings.settings).toEqual(expectedSettings);
  });

  test('should combine default and user settings', () => {
    settings.set('theme', 'gray');

    const expectedSettings = new Map([
      ['theme', 'gray'], // Пользовательская настройка
      ['music', 'trance'], // Оставлена настройка по умолчанию
      ['difficulty', 'easy'] // Оставлена настройка по умолчанию
    ]);

    expect(settings.settings).toEqual(expectedSettings);
  });

  test('should not overwrite default settings that are not changed by user', () => {
    // Устанавливаем только одну пользовательскую настройку
    settings.set('difficulty', 'hard');

    const expectedSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'hard'] // Пользовательская настройка
    ]);

    expect(settings.settings).toEqual(expectedSettings);
  });
});