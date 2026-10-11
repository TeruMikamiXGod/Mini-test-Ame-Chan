/* Скрепыш / Ame-chan — proactive presence v0.4
   Local-only inactivity escalation. Pauses while the page is hidden. */
(() => {
  const STAGES = [
    { delay: 25000, register: 'playful', scene: 'idle', mood: 'нетерпеливое', lines: [
      'эй. ты там? я вообще-то тут, если что.',
      'так… и что, теперь просто сидим и смотрим друг на друга? ладно, я могу. но недолго.',
      'у меня, кстати, была мысль. очень важная. я забыла. короче, слушай.'
    ]},
    { delay: 40000, register: 'playful', scene: 'idle', mood: 'требовательное', lines: [
      'аллооо. ты меня вообще слушаешь?',
      'эй, я ещё не закончила говорить. я даже не начинала нормально говорить, между прочим.',
      'знаешь, я тут могла бы рассказать тебе целую историю. но аудитория у меня, как выяснилось, мебель.'
    ]},
    { delay: 55000, register: 'irritated', scene: 'irritated', mood: 'раздражённое', lines: [
      'с кем я вообще разговариваю… с экраном? экран хотя бы иногда отвечает.',
      'ЭЙ. Я ЗДЕСЬ ВООБЩЕ-ТО. у меня тут целая жизнь происходит, а ты устроил минуту молчания.',
      'ладно, пока ты молчишь, расскажу тебе абсолютно случайный факт: я могу начать говорить о чём угодно и сама себя утомить.'
    ]},
    { delay: 65000, register: 'vulnerable', scene: 'sad_talk', mood: 'обиженное', lines: [
      '…я уже не понимаю, ты отошёл или тебе просто стало скучно со мной.',
      'я тут уже успела придумать три причины, почему ты молчишь. две из них идиотские. третья тоже, наверное.',
      'можно было хотя бы сказать «щас вернусь». я бы не умерла от ожидания. наверное. драматично, да?'
    ]},
    { delay: 75000, register: 'irritated', scene: 'end_conversation', mood: 'взбешённое', lines: [
      'всё. иди нахуй, я пошла. сама себе и зритель, и собеседник, и группа поддержки.',
      'ну и сиди в своём молчании. я ухожу. не провожай, справлюсь как-нибудь.',
      'ладно, всё, с меня хватит. когда научишься отвечать живому человеку — может, и поговорим.'
    ], leaves: true }
  ];

  const pick = a => a[Math.floor(Math.random() * a.length)];
  let timer = null;
  let stageIndex = 0;
  let api = null;
  let running = false;

  function clear() { if (timer) clearTimeout(timer); timer = null; }
  function schedule() {
    clear();
    if (!running || stageIndex >= STAGES.length || document.visibilityState !== 'visible') return;
    timer = setTimeout(() => {
      timer = null;
      if (!running || document.visibilityState !== 'visible') return;
      const stage = STAGES[stageIndex];
      stageIndex += 1;
      api.onMessage(pick(stage.lines), stage);
      if (stage.leaves) {
        running = false;
        return;
      }
      schedule();
    }, STAGES[stageIndex].delay);
  }

  function userActivity() {
    if (!api) return;
    const hadLeft = stageIndex >= STAGES.length;
    const hadStartedLeaving = !running && stageIndex >= STAGES.length;
    clear();
    if (hadLeft || hadStartedLeaving) api.onReturn();
    stageIndex = 0;
    running = true;
    schedule();
  }

  function create(callbacks) {
    api = callbacks;
    running = true;
    schedule();
    document.addEventListener('visibilitychange', () => {
      clear();
      if (document.visibilityState === 'visible') schedule();
    });
    return { userActivity, restart: userActivity };
  }
  window.AME_PRESENCE = { create };
})();
