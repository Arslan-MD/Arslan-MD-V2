const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU43RUVBRGpJYnRkT3ZMUmQxSHJqMzRyTzJjQldMajVMQ3pKNmU0SU0yQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZBNTVDRGxOSjdJQ1hHNktNRG9udHJ1TWJaNUwzcXk2clJSTm14RlFIWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSTRkUjZQdzE2aGVKSEd2bGFYemFXSGVoalpWWkdCQk5uWEhoeWs1WlVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTNTVLeUV4d3dNYmZ1d05aS1M4NlBWcnBOOGZFbzRUcnJ2a3A2ckFPSWtnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1LMGYyNitoUlZkNUE5eTYrVTVubG9qNmhSSGJ3YXNnT05LUzJkUjdJWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJMMzN0TVBhcWkraHRtU0toeHNzNjRFYVpQajMyeEdrL2hDUGVoK09lV2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUxvZmN1Y3kveHRvWFpXc25Zb08wV2wvVCtydlhIRFgzVzA3bTBxdmVsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib08vdGJkeFRzTWl6WWs2dkZJckN0ODJUdnJqYXRIQzBvbXcwZVFzZENXTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ6VXF1azl1K20vb3hlblpaZUtTemhTem9WZFVOZis3aDV1a25ITkQxRVhMSWpEYnVYYm1qZmRsQmNhakZQSDN6aVpzeWJRYWMvUGF3THlHbGlTd0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiJwdUlhUkNmaXVVVjZycTltdkVmZG9CSDZMYmJ5L001QzE0T3YzNFF5YXJvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJYVk4yMUdYMSIsIm1lIjp7ImlkIjoiOTIzMzkyNjE2MjYzOjY1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFyc2xhbk1EIiwibGlkIjoiMTYzMDg5MDg1NDI3ODk2OjY1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG5ZdytvQ0VPM3FvTVVHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSmI0NmxVNEd1M2s5Z1cycG1Zak9IZVlFUGpiVGtrUWVFbGhYd09aeU9YRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibU9NM3dua2U1dE90Zko0RWtHVlQrbnZiTzNQUzZXNm1qK1R4VSt4KzZ0bGlLTEVkMHlCRjVmR053R2I3WkVWcy9JaVpKZDBZVnZmNkJQZTNpdUp3QXc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikx5bUQrazcvMWFocGdUcWQzUUp4NmJ4MDBBK1lCMTFwRldSQitiUHF0MkFuYnNFV3N4TjlmMFJkUGlTZm1LTTA5dUJwY0g5YzNQN05uYndud1VDY0RnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzkyNjE2MjYzOjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNXK09wVk9CcnQ1UFlGdHFabUl6aDNtQkQ0MjA1SkVIaEpZVjhEbWNqbHgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTg1NDE5MSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxLUyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ARSLAN-MD-V2 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/u8pl3t.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan-MD-V2",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Arslan-MD-V2",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "αяѕℓαηм∂ σƒƒι¢ιαℓ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© 𝘾𝙧𝙚𝙖𝙩𝙚𝙙 𝘽𝙮 αяѕℓαηм∂ σƒƒι¢ιαℓ *",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/u8pl3t.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY IM ALIVE NOW  *Arslan-MD-V2*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
