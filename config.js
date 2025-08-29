const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVRekhYU0t3Y1NleUZwTFBVMlFaS1ZKWUpiQWp4WWRQUndPMjM0NjAwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjd5UGpIZzlCaGQvWVBBUVpTVm5FZmNnVTZ3ckxCTktOanZGV2o0Q0dEcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSGxhNDArcVplU2IvSDMyR1NzMGJYREorKzR5VitVckc3OVFYYmwrb0ZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIK3cwNldWYitxbHIyU2RLMGxHeXE0clpIRjVIM0tMVWxGbkhWZkg0TWdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllKU0I5RlVPR1Y2V0gxWGtxVmlWSWZsZlAxZE9XZmswUHh1ak1NOVZnRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9aekJlYUlsRlY3eDZmNndJMExTdXBIdWtIditSNmo5WHB6dVBjM1FhVGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE5UQXhKT1dTbE4zbXFnZHhYYm1sbmh0SVhsOCtuVUpDL1dJUXd0MGtVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHJLSXV2QldkVDlPbHphK2ZTOUxoTlU2cTVyd2ptRHdhRDZmcCtTZW1Ibz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJqYXNGN2Y2a2VxTE0rNllYVU9oYlBtWEtWcTlNOHIxVmw3dXZvUlFkcklYRDVMaDJockFsVDNZNDVnOTFITWtlNmlaaG9mZUZiSlhHM0pKMGd6UGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiJLSW1Id0dqa3k4eUJxaXA3aFdHNlRGN21nWmpYY2lCUHVDZk45UXcxMDlBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM0NjM5ODQwNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzM0RjUwNjE2MkZERTYzNzQ3REQ0NDA4MjA0QURGQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NDUxNjI1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNDYzOTg0MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMwRTdDRDQzODc3MjhEQTA4REI0Njc1MzQwMEFGOEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjQ1MTYyNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQ2Mzk4NDA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQ0YxM0I4NzYwQUE2OTU0NUI0Mzk2MjMzMEQ0M0JFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY0NTE2MjZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkxCTFBDWDhQIiwibWUiOnsiaWQiOiI5MjMzNDYzOTg0MDQ6MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI1OTE3MTkxNjIzNDc5OToyQGxpZCIsIm5hbWUiOiJOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQV29wOThHRUtPbXhjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrK1BzNHBVMVhuMjllN3k0MWhxZ25FeGcwUVM4WHJXT2J0RDlTWVlhcjNVPSIsImFjY291bnRTaWduYXR1cmUiOiJnWWhURHo0YjdmNVNpaUQvWUd1d1ZkQS9EWUhVZHNaUGdVL3kzS0V5VEwvSW91VGI1bGhNVkNSdFN4d2RnTEpVUmZxenFBaXdDZlZmN0o0T3hVejJCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUzN5dTd3dU5GaW96QnNpTHMrL0hRUDNLMjBXNFEyZVJjMGV0NVQwOXZNV2tnT1lRM0dOZjAvNGFjNDc2NGxFc2RucnI1TTRKczgxM3BtYmxGQXNsZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNDYzOTg0MDQ6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmdmo3T0tWTlY1OXZYdTh1Tllhb0p4TVlORUV2RjYxam03US9VbUdHcTkxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY0NTE2MjMsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQlpmIn0=",
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
