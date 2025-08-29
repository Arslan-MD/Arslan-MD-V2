const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpId3FpYWsyM0V0UnVPS2ZUcG5CeURzdG5pV0E5NTE4Wk40a2I5bkxGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnBWcWpaVHJoZ3ZvZnhDUGw5RjRmanVjcGNiM1ZaYjRMUWl4Szdua29qND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQ1A3L2VjYk05QlNaYWMybUhScDV3SVdvNGFuNkJGMXNkVy9QVUpHZkYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUbU1POEQ1YjJxTWV5aERaK2t1S2t0YzcxdGpQL3JqbjN0bXlkOXIrczNVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJejZJclJSZ3pMeWJxaHBzSzQ1bFZnaFZsTzh0TzY1aFl6THFmRjFNRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5xTm9YMTFLWjEyWjJTYTVFVmg2OElXcXVkSEsxazRseFluNWtWSlkxbk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZZU1R1Y2RBTEUxY2hKYVdMTStQQSs5OFJIaWNjeTkyUjBkbngrdldWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVhvNXBIZWRud3NYL0puSk5sbjVINjhrRmt6eGVoTU1qVzJ6ZXlkYUtVST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFMNE5ETUVEblE3bVBuR1dQT0NNL3c3NlM2TVAzbHc0endFMkN6KzRKL1A3M3RPa01EN0pRREFQQmRja21pSDVGMllGZmF1UFJ3NUtVMnhyVFBSVkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6IkliYWhHMWtLTVZRek5ZKzVRTEtRbkhPKzcvbnB3bThCVTJRV0dMRzY2SGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQ2Mzk4NDA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMDA3MEJCNzlDQjQ5MEU0QzMwQzE2MTlEQkE2QzM3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY0NTI3ODR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM0NjM5ODQwNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0FGNDJDREQyQTc3QjgwMzc2OUQwMDIxQTBCQ0Q4RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NDUyNzg1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNDYzOTg0MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNFODdFQUNBN0QyQUYwODBDRTlFN0UwQ0RCRjlDMzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjQ1Mjc4Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiTFRWWjYzUUQiLCJtZSI6eyJpZCI6IjkyMzM0NjM5ODQwNDozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjU5MTcxOTE2MjM0Nzk5OjNAbGlkIiwibmFtZSI6Ik4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1Bhb3A5OEdFS3V2eGNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IisrUHM0cFUxWG4yOWU3eTQxaHFnbkV4ZzBRUzhYcldPYnREOVNZWWFyM1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImRwUS9MWG5GMnowdnZMU2ZpaSszT01ONWVYOE8yTyszblVtS2VRV0cyQ3pUZE5hbmU5cXBEaHVPWW05NlNaV0JPc2YzSE5QYVJ3K2FneDdmVTI2eEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkTWZOTEwxRENRek1NclBSSXN3WGNud2RDZTFNaVp4QjJ3SDJqWEpCVEdlUkY5VDkvR1puS3VLR3JsU3RnWndDTjQzNEpxZXJzRm8yN2VrWTQ2WlVBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0NjM5ODQwNDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZ2ajdPS1ZOVjU5dlh1OHVOWWFvSnhNWU5FRXZGNjFqbTdRL1VtR0dxOTEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjQ1Mjc4MiwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLVXEifQ==",
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
