 const audio = document.getElementById('audio-player'); // Gets the audio player element of the <audio> of HTML5 using its ID 'audio-player'.
 const subtitlesList = document.getElementById('subtitles-list'); // Gets the subtitles list property of the <ol> of HTML5 element using its ID 'subtitles-list'.
 const linksContainer = document.getElementById('links-container'); // Gets the links container element which contain the links in the <a> of HTML5 using its ID 'links-container'.
 const headContainer = document.getElementById('head-container') // Gets the head container element which contains the <hr> & <h2> of HTML5 using its ID 'head-container'.


 const subtitles = [ // The lyrics of the song and their timing, colors and line breaks.
 {time: 0, text: '(♪ Playing Intro to "Love Runs Out" by "OneRepublic" ♪)',color:'Red'},
 {time: 7, text: "(♪ 🥁Musical Drum & Tambourine Music Playing🥁 ♪)",color:'Lime'},
 {time: 16, text: "(♪ 🎹Pianic Music Playing🎹 ♪)\n\n",color:'Lavenderblush'},
 {time: 31, text: "I'll be your light, your match, your burning sun"},
 {time: 35, text: "I'll be the bright in black that's making you run"},
 {time: 39, text: "And we'll feel alright, and we'll feel alright"},
 {time: 43, text: "'Cause we'll work it out, yeah, we'll work it out"},
 {time: 47, text: "I'll be doing this, if you have a doubt"},
 {time: 51, text: "'Til the love runs out, 'til the love runs out \n\n"},

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
 {time: 179, text: "I'll be the bright in black that's making you run\n\n",color: 'Coral'},

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
 {time: 235, text: '(Music Fades)',color:'Brown'}];


 // Initializes the variables to keep track of the current subtitle index, subtitle item, and character index.
 let currentSubtitleIndex = 0;  // Keeps track of which subtitle is currently being displayed.
 let currentSubtitleItem = null;  // Stores the current subtitle element being displayed.
 let currentCharacterIndex = 0; // Tracks the position of the current character within the subtitle.


 function displaySubtitle(time) { // This function is responsible for displaying subtitles based on the given time.
 const subtitle = subtitles[currentSubtitleIndex]; // Get the subtitle object at the current index.
 if (subtitle && time >= subtitle.time && currentSubtitleItem !== subtitle) { // Checks if there is a subtitle to display and if there is a subtitle to display then on what time?
 currentSubtitleItem = subtitle; // Store the current subtitle being displayed.
 const musicSymbol = "\u266B"; //A music symbol unicode character to interpret this symbol "♪" correctly.


 const subtitleItem = document.createElement('li'); // Create a new list item element to display the subtitle (Basically to display the subtitles like a <li> element would in an ordered list in HTML5).
 subtitleItem.style.color = subtitle.color; // Apply the specified color to the subtitle to the list item's text color (Basicaclly the color of each line of lyric).


 const fontFamilies = ['Harlow Solid', 'Forte', 'MV Boli']; // An array of font families to apply on each subtitle line (Here, we choose which font families we want to apply).
 const fontFamilyIndex = currentSubtitleIndex % fontFamilies.length; /// Calculate the index of the font family based on the current subtitle index.
 subtitleItem.style.fontFamily = fontFamilies[fontFamilyIndex]; // Apply the selected font family to the subtitle item's font.


 const typingDelay = 60; // Set the typing speed of each character in milliseconds for the "Typewriter Animation".
 const subtitleText = subtitle.text; // Get the text of the current subtitle (For"Typewriter Animation" ).
 currentCharacterIndex = 0; // Reset the character index to start from the beginning of the subtitle text (To get ready to type the next line of subtitle).
 subtitleItem.innerHTML = ''; // Clear the content of the subtitle item to start fresh.
 const typingInterval = setInterval(() => { // Set an interval to simulate typing effect.

 if 
 (currentCharacterIndex < subtitleText.length) { // Check if there are more characters in the subtitle text to type.
 subtitleItem.innerHTML += subtitleText.charAt(currentCharacterIndex); // Add the current character to the subtitle item's content.
 currentCharacterIndex++;} // Move to the next character for the next iteration

 else
 {clearInterval(typingInterval); //If all characters of the subtitle have been typed the it clears the typing interval to stop the typing effect.
  
 if (subtitles[currentSubtitleIndex + 1] && subtitle.text.endsWith('\n')) {  // Check if there's a next subtitle and whether or not the current subtitle text ends with a new line.
 subtitleItem.innerHTML += '<br><br>';} // Adds extra line breaks to create spacing between subtitle paragraphs.
 currentSubtitleIndex++;}},typingDelay); // Move to the next subtitle index for the next iteration.
 subtitlesList.appendChild(subtitleItem);}} // Append the completed subtitle item to the subtitles list container. Append - Think of "append" like adding one thing to another. It's like when you have a stack of building blocks and you put another block on top. So, in the code, when we "append" the subtitle item to the subtitles list, we're basically putting the finished subtitle on the list to show it to you, just like you'd add a new block to your tower of blocks. 🏗️🧱


 audio.addEventListener('timeupdate', () => { // The EventListener keeps track of the (current playback time) updates of the audio as it is being played.
 const currentTime = audio.currentTime; // Gets the current time of the audio playback.
 displaySubtitle(currentTime);}); // Calls the function to display the appropriate subtitle at the current time.

 audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    displaySubtitle(currentTime);
  
 // Check if the audio has started playing
 if (currentTime > 0 && headContainer.style.display !== 'block') {
 // Make the <hr> and <h2> elements visible
 headContainer.style.display = 'block';}});


 audio.addEventListener('ended', () => { //Checks if the audio has ended.
 linksContainer.style.display = 'block';}); // To display the links in the links-container in the HTML Code.
  
 // This block's sole purpose (at least in this case) is to keep receiving updates on whether the song has ended or not so that it can render the hyperlinks at the end of the song.
 audio.addEventListener('timeupdate', () => {
 const currentTime = audio.currentTime;
 displaySubtitle(currentTime);});
