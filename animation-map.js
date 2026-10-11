/* Ame-chan animation map, draft v0.2.
   Copy this file into the project. Images should be available at ./sprites/<filename>.
   This file contains no external dependencies and does not choose story-only animations by accident.
*/
const AME_ANIMATIONS = [
  { file: 'IMG_1693.gif', label: 'Слушает музыку', group: 'everyday', situations: ['idle', 'music', 'long_idle'], randomEveryday: true },
  { file: 'IMG_1694.gif', label: 'Красит ногти', group: 'everyday', situations: ['idle', 'casual', 'dismissive'], randomEveryday: true },
  { file: 'IMG_1695.gif', label: 'Вытирает слезу', group: 'sad', situations: ['sad_talk', 'comfort', 'low_mood'], randomEveryday: false },
  { file: 'IMG_1696.gif', label: 'Ищет что-то в телефоне', group: 'everyday', situations: ['startup', 'ordinary_question', 'idle', 'phone'], randomEveryday: true },
  { file: 'IMG_1697.gif', label: 'Делает селфи', group: 'everyday', situations: ['selfie', 'casual', 'idle'], randomEveryday: true },
  { file: 'IMG_1698.gif', label: 'Лёгкое удивление / неясная реакция', group: 'surprise', situations: ['surprise', 'uncertain_reaction'], randomEveryday: false },
  { file: 'IMG_1699.gif', label: 'Крутит спиннер', group: 'everyday', situations: ['idle', 'impatient', 'long_idle'], randomEveryday: true },
  { file: 'IMG_1700.gif', label: 'Крутит косичками', group: 'positive', situations: ['pleased', 'compliment', 'idle'], randomEveryday: true },
  { file: 'IMG_1701.gif', label: 'Волосы распущены, рука у лица', group: 'positive', situations: ['compliment', 'friendly_talk', 'pleased'], randomEveryday: true },
  { file: 'IMG_1702.gif', label: 'Хвост, наклон головы', group: 'irritated', situations: ['skeptical', 'mild_irritation', 'casual'], randomEveryday: true },
  { file: 'IMG_1703.gif', label: 'Подпирает подбородок рукой', group: 'positive', situations: ['friendly_talk', 'listening', 'pleased'], randomEveryday: true },
  { file: 'IMG_1704.gif', label: 'Таблетки: отчаяние сменяется эйфорией', group: 'story_special', situations: ['special_scene_pills_1'], randomEveryday: false },
  { file: 'IMG_1705.gif', label: 'Таблетки: подавленность / эйфория', group: 'story_special', situations: ['special_scene_pills_2'], randomEveryday: false },
  { file: 'IMG_1706.gif', label: 'Таблетки: тоска сменяется эйфорией', group: 'story_special', situations: ['special_scene_pills_3'], randomEveryday: false },
  { file: 'IMG_1707.gif', label: 'Курение, затем ухудшение состояния', group: 'story_special', situations: ['special_scene_smoking_blackout'], randomEveryday: false },
  { file: 'IMG_1708.gif', label: 'Таб на языке, экстаз', group: 'story_special', situations: ['special_scene_tab'], randomEveryday: false },
  { file: 'IMG_1712.gif', label: 'Усталость, мутный взгляд, таблетки', group: 'story_special', situations: ['special_scene_pills_tired'], randomEveryday: false },
  { file: 'IMG_1713.gif', label: 'Рвота', group: 'story_special', situations: ['special_scene_sick'], randomEveryday: false },
  { file: 'IMG_1714.png', label: 'Абсолютное недовольство', group: 'irritated', situations: ['strong_irritation', 'rude_message'], randomEveryday: false, static: true },
  { file: 'IMG_1715.gif', label: 'Довольное поглаживание', group: 'positive', situations: ['pet', 'tap_character', 'affection', 'praise'], randomEveryday: false, priority: 10 },
  { file: 'IMG_1716.gif', label: 'Отводит взгляд, неловкость / недовольство', group: 'irritated', situations: ['awkward', 'skeptical', 'mild_irritation'], randomEveryday: true },
  { file: 'IMG_1717.gif', label: 'Мечтательно смотрит в телефон', group: 'positive', situations: ['ordinary_question', 'phone', 'pleased', 'idle'], randomEveryday: true },
  { file: 'IMG_1718.gif', label: 'Играет и слегка злится', group: 'irritated', situations: ['game', 'frustrated', 'idle'], randomEveryday: true },
  { file: 'IMG_1719.gif', label: 'Встаёт и уходит', group: 'irritated', situations: ['end_conversation', 'leave', 'strong_irritation'], randomEveryday: false },
  { file: 'IMG_1720.gif', label: 'Обнимает подушку', group: 'positive', situations: ['night', 'comfort', 'cozy_idle'], randomEveryday: true },
  { file: 'IMG_1721.gif', label: 'Паника / отчаяние', group: 'anxiety', situations: ['panic_talk', 'overwhelmed', 'anxiety_scene'], randomEveryday: false },
  { file: 'IMG_1723.gif', label: 'Плачет (основная версия)', group: 'sad', situations: ['sad_talk', 'comfort', 'low_mood'], randomEveryday: false },
  { file: 'IMG_1724.gif', label: 'Переключает что-то на пульте', group: 'everyday', situations: ['idle', 'bored', 'casual'], randomEveryday: true },
  { file: 'IMG_1725.gif', label: 'Увлечённо читает', group: 'everyday', situations: ['reading', 'focused', 'long_idle'], randomEveryday: true },
  { file: 'IMG_1726.gif', label: 'Таблетки, остаётся в сознании', group: 'story_special', situations: ['special_scene_pills_awake'], randomEveryday: false },
  { file: 'IMG_1727.gif', label: 'Дезориентация / изменённое состояние', group: 'story_special', situations: ['special_scene_unwell'], randomEveryday: false },
  { file: 'IMG_1728.gif', label: 'Прикуривает сигарету', group: 'story_special', situations: ['special_scene_smoking'], randomEveryday: false },
  { file: 'IMG_1729.gif', label: 'Нервничает', group: 'anxiety', situations: ['anxious_talk', 'uncertain', 'nervous'], randomEveryday: false },
  { file: 'IMG_1730.gif', label: 'Удивление сменяется радостью', group: 'positive', situations: ['compliment', 'surprise', 'good_news', 'praise'], randomEveryday: false }
];

const AME_SITUATION_RULES = {
  startup: ['IMG_1696.gif'],
  pet: ['IMG_1715.gif'],
  tap_character: ['IMG_1715.gif'],
  ordinary_question: ['IMG_1696.gif', 'IMG_1717.gif'],
  compliment: ['IMG_1730.gif', 'IMG_1701.gif', 'IMG_1700.gif'],
  sad_talk: ['IMG_1723.gif', 'IMG_1695.gif'],
  irritated: ['IMG_1714.png', 'IMG_1716.gif', 'IMG_1702.gif', 'IMG_1718.gif'],
  rude_message: ['IMG_1714.png', 'IMG_1716.gif'],
  end_conversation: ['IMG_1719.gif'],
  surprise: ['IMG_1730.gif', 'IMG_1698.gif'],
  idle: ['IMG_1693.gif', 'IMG_1694.gif', 'IMG_1696.gif', 'IMG_1697.gif', 'IMG_1699.gif', 'IMG_1700.gif', 'IMG_1701.gif', 'IMG_1702.gif', 'IMG_1703.gif', 'IMG_1717.gif', 'IMG_1718.gif', 'IMG_1724.gif', 'IMG_1725.gif'],
  long_idle: ['IMG_1693.gif', 'IMG_1699.gif', 'IMG_1720.gif', 'IMG_1725.gif']
};

/** Return the available animation filenames for a situation. */
function ameAnimationChoices(situation) {
  return AME_SITUATION_RULES[situation] || AME_SITUATION_RULES.idle;
}

/** Choose a filename while avoiding an immediate repeat where possible. */
function chooseAmeAnimation(situation, previousFile = '') {
  const choices = ameAnimationChoices(situation);
  const notPrevious = choices.filter(file => file !== previousFile);
  const pool = notPrevious.length ? notPrevious : choices;
  return pool[Math.floor(Math.random() * pool.length)];
}

/** Apply an animation to an <img id="ame"> element. */
function showAmeAnimation(situation, previousFile = '') {
  const img = document.getElementById('ame');
  if (!img) return previousFile;
  const file = chooseAmeAnimation(situation, previousFile);
  img.src = `./sprites/${file}`;
  img.alt = (AME_ANIMATIONS.find(item => item.file === file) || {}).label || 'Ame-chan';
  return file;
}
