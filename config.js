const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BsN1MvRkRKWlBvQmVwbW44OWpJem1ucnBqYjZHcUJyY3JUeE1KTTAzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQng1T1hmMm9ZZFB5WWJzT2V6eTR5eU93bDlZcHhTY0hLdWhVVEhOVUdrVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSktpNVZldDZ2NjhxR2Faa3IvakcvMVE4SGF6U1ppYmFpVGdRTU5HQkZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKdlJTTjFGTFNoNGtUbnJLUlhlK01yd3pKMkVTUkdaMXB6eDdFWUw2Vnk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJcmhkazMxRnhYZ0tKTlZrYzFGT2xtbFhGanRxMno2OGUwck1Uek93RVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9CditXUHFFdmE4S0xPcFZyL0R0VFprNkRqSkdobkVsN1R1TWt5M2VxbDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ptSVltdlkxbnIvSjFDdkp0aFZ3cHpGUmxvZXJ2bGg2dzRUQlY5aUMxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFJJazB2TVI0L09IM05tZDlUTlk2SDExc3pEV045d3hpekYydVh6L2luMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVVODR1L3VzTERGbHZ6dVNjcmFKV3lZYnkzNlJPU1lrN21KenVWRnJRdTBpdS9yNDJWbHEwYnRoNVJkU25wVmZmSTJ0M3l5VEJadHdZdFBHY1g1U0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6Ijl3TE1rTVBDMTllZXNCa1NYTWd4VTQrR2x5aTU0VndxT0FjNGhwcnBKRk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlJZN0hZS0s1IiwibWUiOnsiaWQiOiI5MjMyMzcwNDU5MTk6OThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiWC1CT1RaIFRFQU0gTEVBREVSIiwibGlkIjoiMTMxMDY1NzQyMTI3MjM0Ojk4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0NScUt3R0VQS3p4Y1VHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVG9TVXFHT2NlRUdlUmlEQTlPOEcwVFZWNnZRb0JVRWZ2WjZXWXpkRCt3VT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOTloR2RIT0V1ZkM3MkRrSUpuMDE4Y2xRNStPZXIzTy8zVXQ2cE95ODFYbTRWZjRaK05UVGxIakIwdVlaZVhqNDFRMU8xR1JWK1g4enNmTWJscDM5QlE9PSIsImRldmljZVNpZ25hdHVyZSI6IloxdHFWRE1lWkxVY2tkYURmMmdHdHFLNEkvRnR6UjM2aDRkVXZIT0hIazl4SGQ2VDZNR2NBYTZOL3doZHUrMVNPT3NveXVzK0VTU2ZEMlBuVlZ5Z0FBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjM3MDQ1OTE5Ojk4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlU2RWxLaGpuSGhCbmtZZ3dQVHZCdEUxVmVyMEtBVkJINzJlbG1NM1Evc0YifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjQ1MzM2NiwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNa24ifQ==",
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
