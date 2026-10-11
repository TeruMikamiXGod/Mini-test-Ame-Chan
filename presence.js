/* Ame-chan v1.0 — persistent-friendly English inactivity reactions. */
(() => {
  const STAGES = [
    { delay: 25000, register: 'playful', scene: 'idle', mood: 'impatient', lines: [
      'hey. you there? i’m literally right here, you know. :3',
      'so… are we just going to stare at each other? i can do that. but not forever.',
      'i had something important to say. forgot what it was. anyway, listen to me.'
    ]},
    { delay: 40000, register: 'playful', scene: 'idle', mood: 'demanding', lines: [
      'helloooo? are you even listening to me?',
      'hey, i wasn’t finished talking! okay, technically i barely started, but still.',
      'i could tell you a whole story, but apparently my audience is a piece of furniture.'
    ]},
    { delay: 55000, register: 'irritated', scene: 'irritated', mood: 'annoyed', lines: [
      'who am i even talking to… the screen? at least the screen is always here.',
      'HEY. I’M RIGHT HERE. i have a whole life happening and you’re holding a minute of silence.',
      'fine, i’ll tell myself a random fact. i can talk about anything until i annoy even myself.'
    ]},
    { delay: 65000, register: 'vulnerable', scene: 'sad_talk', mood: 'hurt', lines: [
      '…i can’t tell if you stepped away or just got bored of me.',
      'i’ve already come up with three reasons you’re not answering. two are stupid. the third probably is too.',
      'you could’ve said “brb,” you know. i wouldn’t have died waiting. probably. dramatic, huh?'
    ]},
    { delay: 75000, register: 'irritated', scene: 'end_conversation', mood: 'furious', lines: [
      'that’s it. screw you, i’m leaving. i’ll be my own audience, conversation partner, and support group.',
      'fine, enjoy your silence. i’m out. don’t see me off; i’ll manage.',
      'okay, i’m done. maybe we’ll talk when you remember how to answer a living person.'
    ], leaves: true }
  ];
  const pick = a => a[Math.floor(Math.random() * a.length)];
  let timer = null, stageIndex = 0, api = null, running = false;
  function clear() { if (timer) clearTimeout(timer); timer = null; }
  function schedule() {
    clear();
    if (!running || stageIndex >= STAGES.length || document.visibilityState !== 'visible') return;
    timer = setTimeout(() => {
      timer = null;
      if (!running || document.visibilityState !== 'visible') return;
      const stage = STAGES[stageIndex++];
      api.onMessage(pick(stage.lines), stage);
      if (stage.leaves) { running = false; return; }
      schedule();
    }, STAGES[stageIndex].delay);
  }
  function userActivity() {
    if (!api) return;
    clear(); stageIndex = 0; running = true; schedule();
  }
  function create(callbacks) {
    api = callbacks; running = true; schedule();
    document.addEventListener('visibilitychange', () => {
      clear(); if (document.visibilityState === 'visible') schedule();
    });
    return { userActivity, restart: userActivity };
  }
  window.AME_PRESENCE = { create };
})();
