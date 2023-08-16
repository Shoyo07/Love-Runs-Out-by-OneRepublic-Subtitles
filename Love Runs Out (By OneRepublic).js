 const audio = document.getElementById('audio-player');
 const subtitlesList = document.getElementById('subtitles-list');

 const subtitles = [
 {time: 0, text: '(Playing Intro to "Love Runs Out" by "OneRepublic")',color:'Red'},
 {time: 7, text: "(Drum Music Playing)",color:'Lime'},
 {time: 16, text: "(Pianic Music Playing)\n\n",color:'Lavenderblush'},
 {time: 31, text: "I'll be your light, your match, your burning sun"},
 {time: 35, text: "I'll be the bright in black that's making you run"},
 {time: 39, text: "And we'll feel alright, and we'll feel alright"},
 {time: 43, text: "'Cause we'll work it out, yeah, we'll work it out"},
 {time: 47, text: "I'll be doing this, if you have a doubt"},
 {time: 51, text: "'Til the love runs out, 'til the love runs out\n\n"},

 {time: 55, text: "I'll be your ghost, your game, your stadium" ,color:'Gold'},
 {time: 59, text: "I'll be your 50 thousand clapping like one",color:'Gold'},
 {time: 63, text: "And I feel alright, and I feel alright",color:'Gold'},
 {time: 67, text: "'Cause I worked it out, yeah, I worked it out",color:'Gold'},
 {time: 71, text: "I'll be doing this, if you have a doubt",color:'Gold'},
 {time: 75, text: "'Til the love runs out, 'til the love runs out\n\n",color:'Gold'},

 {time: 79, text: "I got my mind made up, man, I can't let go",color:'Hotpink'},
 {time: 84, text: "I'm killing every second 'til it sees my soul",color:'Hotpink'},
 {time: 88, text: "(Woo) I'll be running (woo), I'll be running",color:'Hotpink'},
 {time: 92, text: "'Til the love runs out, 'til the love runs out",color:'Hotpink'},
 {time: 96, text: "And we'll start a fire, and we'll shut it down",color:'Hotpink'},
 {time: 99, text: "'Til the love runs out, 'til the love runs out\n\n",color:'Hotpink'},

 {time: 103, text: "There's a maniac out in front of me",color:'Springgreen'},
 {time: 107, text: "Got an angel on my shoulder, and Mestopheles",color:'Springgreen'},
 {time: 111, text: "But mama raised me good, mama raised me right",color:'Springgreen'},
 {time: 115, text: 'Mama said, "Do what you want, say prayers at night"',color:'Springgreen'},
 {time: 119, text: "And I'm saying them 'cause I'm so devout",color:'Springgreen'},
 {time: 123, text: "'Til the love runs out, 'til the love runs out, yeah\n\n",color:'Springgreen'},

 {time: 127, text: "I got my mind made up, man, I can't let go",color:'Crimson'},
 {time: 131, text: "I'm killing every second 'til it sees my soul",color:'Crimson'},
 {time: 134, text: "(Woo) I'll be running (woo), I'll be running",color:'Crimson'},
 {time: 139, text: "'Til the love runs out, 'til the love runs out",color:'Crimson'},
 {time: 143, text: "And we'll start a fire, and we'll shut it down",color:'Crimson'},
 {time: 147, text: "'Til the love runs out, 'til the love runs out\n\n",color:'Crimson'},

 {time: 152, text: "And, oh, we all want the same thing" ,color: 'Coral'},
 {time: 159, text: "Oh-ooh-oh, we all run for something",color: 'Coral'},
 {time: 167, text: "Run for God, for fate, for love, for hate",color: 'Coral'},
 {time: 171, text: "For gold and rust, for diamonds and dust",color: 'Coral'},
 {time: 175, text: "I'll be your light, your match, your burning sun",color: 'Coral'},
 {time: 180, text: "I'll be the bright in black that's making you run\n\n",color: 'Coral'},

 {time: 185, text: "I got my mind made up, man, I can't let go" ,color: 'Silver'},
 {time: 189, text: "I'm killing every second 'til it sees my soul",color: 'Silver'},
 {time: 193, text: "(Woo) I'll be running (woo), I'll be running",color: 'Silver'},
 {time: 197, text: "'Til the love runs out, 'til the love runs out",color: 'Silver'},
 {time: 201, text: "And we'll start a fire, and we'll shut it down",color: 'Silver'},
 {time: 205, text: "'Til the love runs out, 'til the love runs out\n\n",color: 'Silver'},

 {time: 209, text: "I'll be your light, your match, your burning sun",color: 'Azure'},
 {time: 213, text: "I'll be the bright in black that's making you run",color: 'Azure'},
 {time: 217, text: "And we'll feel alright, and we'll feel alright",color: 'Azure'},
 {time: 221, text: "'Cause we'll work it out, yes, we'll work it out",color: 'Azure'},
 {time: 225, text: "And we'll start a fire, and we'll shut it down",color: 'Azure'},
 {time: 229, text: "'Til the love runs out, 'til the love runs out",color: 'Azure'},
 {time: 233, text: "'Til the love runs out\n",color:'Azure'},
 {time: 235, text: '(Music Fades)',color:'Dimgray'}];

 let currentSubtitleIndex = 0;
 let currentSubtitleItem = null;
 let currentCharacterIndex = 0;

 function displaySubtitle(time) {
 const subtitle = subtitles[currentSubtitleIndex];
 if (subtitle && time >= subtitle.time && currentSubtitleItem !== subtitle) {
 currentSubtitleItem = subtitle;

 const subtitleItem = document.createElement('li');
 subtitleItem.style.color = subtitle.color;

 const fontFamilies = ['Harlow Solid', 'Forte', 'MV Boli'];
 const fontFamilyIndex = currentSubtitleIndex % fontFamilies.length;
 subtitleItem.style.fontFamily = fontFamilies[fontFamilyIndex];

 const typingDelay = 80; 
 const subtitleText = subtitle.text;
 currentCharacterIndex = 0;
 subtitleItem.innerHTML = ''; 
 const typingInterval = setInterval(() => {
 if 
 (currentCharacterIndex < subtitleText.length) {
 subtitleItem.innerHTML += subtitleText.charAt(currentCharacterIndex);
 currentCharacterIndex++;} 
 else
 {clearInterval(typingInterval);
 if (subtitles[currentSubtitleIndex + 1] && subtitle.text.endsWith('\n')) {
 subtitleItem.innerHTML += '<br><br>';}
 currentSubtitleIndex++;}},
 typingDelay);
 subtitlesList.appendChild(subtitleItem);}}

 audio.addEventListener('timeupdate', () => {
 const currentTime = audio.currentTime;
 displaySubtitle(currentTime);});
