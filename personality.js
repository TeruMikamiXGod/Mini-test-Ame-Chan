/* Ame-chan v1.0 — English fallback helpers. The Cloudflare model remains the main conversational brain. */
(() => {
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const REGISTERS = {
    streamer: {label:'KAngel / on stage', mood:'confident', scene:'compliment'},
    playful: {label:'playful Ame-chan', mood:'pleased', scene:'pet'},
    everyday: {label:'Ame-chan · everyday', mood:'calm', scene:'ordinary_question'},
    vulnerable: {label:'vulnerable Ame-chan', mood:'anxious', scene:'sad_talk'},
    irritated: {label:'irritated Ame-chan', mood:'annoyed', scene:'rude_message'},
    curious: {label:'curious Ame-chan', mood:'interested', scene:'ordinary_question'},
    sleepy: {label:'sleepy Ame-chan', mood:'sleepy', scene:'long_idle'},
    surprised: {label:'shocked Ame-chan', mood:'surprised', scene:'surprise'}
  };
  let register = 'everyday', affection = 0;
  function setRegister(label) {
    const el = document.getElementById('registerLabel');
    if (el) el.textContent = label || (REGISTERS[register] || REGISTERS.everyday).label;
  }
  function answer(raw) {
    const t = String(raw || '').toLowerCase();
    let key = 'everyday', scene = 'ordinary_question', mood = 'interested', replies = [
      'hm. what do you think about it, P-chan?', 'mm, that sounds interesting. keep going, i’m listening.',
      'i’m not sure i got all of that, but now i’m curious.', 'okay, and then what happened?',
      'wait, are you being serious or testing me right now?'
    ];
    if (/(shut up|stupid|idiot|hate you|fuck off|заткнись|тупая|дура|ненавижу|иди нах)/i.test(t)) {
      key='irritated'; scene='rude_message'; mood='offended'; replies=['hey, easy. i didn’t sign up to be your punching bag.', 'wow. so much tenderness. i think i’ll go do my own thing.', 'fine. *dramatically turns away*', 'if you have something to say, say it properly. i’m not a mind reader.'];
    } else if (/(hi|hello|hey|привет|здравств)/i.test(t)) {
      key='everyday'; replies=['oh, hey. what kind of disaster are we dealing with today?', 'there you are. i definitely wasn’t missing you. almost.', 'heyyy. what are we doing? and don’t say “i don’t know.”'];
    } else if (/(cute|pretty|beautiful|amazing|love you|милая|красивая|люблю тебя)/i.test(t)) {
      key='streamer'; scene='compliment'; mood='pleased'; affection=Math.min(10,affection+1); replies=['i know. but it’s nice that you finally noticed. <3','pfft… whatever. keep talking, i’m listening.','there goes my ego, fully restored for the next three minutes.'];
    } else if (/(sad|lonely|hurt|crying|грустно|одинок|больно|плачу)/i.test(t)) {
      key='vulnerable'; scene='sad_talk'; mood='sad'; replies=['ugh… that sounds rough. wanna tell me what happened?','i won’t pretend i can fix everything with one sentence, but i’m listening.','you don’t have to make it sound neat. just say it however you can.'];
    } else if (/(what are you doing|how are you|как дела|что делаешь)/i.test(t)) {
      key='everyday'; replies=['scrolling my phone. the internet has brought me nothing interesting again. what about you?', 'just killing time and pretending i have everything under control.', 'checking who messaged me. oh, it’s you. go on.'];
    }
    register=key; setRegister(); return {text:pick(replies),scene,mood,register:REGISTERS[key].label,registerKey:key};
  }
  window.AME_PERSONALITY = {
    answer, registerLabel:()=>REGISTERS[register].label, setRegister,
    onPet(){ affection=Math.min(10,affection+1); register='playful'; setRegister(); return pick(['hmph… okay, that was nice. ♡','hehe. a little more, if you insist :3','*closes her eyes, looking pleased* there. much better.','don’t get used to me being this cute.']); },
    onIdle(){ register=pick(['everyday','sleepy','curious']); setRegister(); return register==='sleepy' ? 'i’m going to close my eyes for a second. i can still hear you. probably.' : ''; },
    setExternalRegister(key){if(REGISTERS[key]) register=key;setRegister();}
  };
})();
