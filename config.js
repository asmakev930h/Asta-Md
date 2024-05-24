const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""
global.email ="astromedia0010@gmail.com"
global.location="Astro,World"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/JMsAFRD.jpeg" ;
global.caption = process.env.CAPTION || global.caption || "cobra 2024" 
global.BUTTONS = process.env.BUTTONS || process.env.MENU_BTN || "1";


global.devs = "2347041039367"
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347041039367";
global.style = process.env.STYLE   || '2'
global.flush = process.env.FLUSH   || "false"; 
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false",

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" 
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/mHEqQgr.jpg,https://i.imgur.com/lSdca7B.jpg,https://i.imgur.com/XakNh3r.jpg,https://i.imgur.com/UslG8eB.jpg,https://i.imgur.com/0OQxTyt.jpg,https://i.imgur.com/MJCmdiA.jpg,https://i.imgur.com/K7zFZl2.jpg"
global.waPresence= process.env.WAPRESENCE ||  "online" ;


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348039607375";


global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2347041039367";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347041039367";

global.api_smd = "https://api-amd.onrender.com"
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "Astropeda;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU80SXdHYnhNbmw4ank0bkwyZ2xGTzJnNXh1MUM5UWtZak8rU1llSk1Ybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmdvNERJQ2JUMm1pMktrTU9ENlc2bkxiU3FwTVVJbnkrcE4yUzdjTUhqOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRERFQnNxYXl3dmVWWjhsRjI4dlVZWVdQUE04Ukx2SWxZNFlIcHRHa21nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaQ1orV0czM1J1L2ZLemVLM3BDK2FJVkdHQ2h5cUhmOVNjZCtyblhEMUZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRBWkF3cjd3Sk04MFVIUzVaSkF4eHMydXB5Vi9GcDQvbzBqMlY4c2FNVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFrN1BmQlo1S1RWMUd4KzEyNEh1enBhVEV1cDRzWEVsL0grRUtVMjlqanM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUcyZTQxWHh1L3UyNStMUEZDbWdBSEdyd2pwSW0yNy9nVnAyYXJQUy9Iaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTE90VkgwVklKZElPMDZKRnhRTXJ6eFBwdDlpdDJFRWIybHBocmRHUGtYUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IisybUUwSmlDVzBHUU12eHVBUHJ4VTV1ZUhEMXdMUjBsSi95RE1lcy9vY0lMblNqbDVUZzI2R0pneHFaZnVUdDlsQWt0a0ZaSVB3aDZPWFJPOVh4bERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJjZzh6T3VzVDV0Y0ZlT2h6VmJJV2xtNFdYRmtmUHptR3B2NnRGV3BqekxBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDEwMzkzNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjZCNzFDMEJDOTUyQTk5MDlDMDAwOTY1RjUxQTkxNjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNTQ2MzQyOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZ3VsY0g1UW9TNktDMW5NRjBEZl9udyIsInBob25lSWQiOiJkYjYyZWRiMS05Yjk1LTQ5MDctOTIwYS1iYTY0NjU5ZjE5MTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidC9Db3lqbnVKbHZWYWIvR1YyTnFwRXVHMk9RPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxYejZSTDdHbVg3T2drVnBGM3R4bFNpcjdzaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxUVo1RVozNiIsIm1lIjp7ImlkIjoiMjM0NzA0MTAzOTM2Nzo4MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJjb2JyYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEhEa3I0SEVQTEovN0VHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoickJHdjFkcHBFb2Y1OTJocFN6UkRlZUhrd2lLSXJyRU5XTHhxNWgzWXpCTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ09uNG9xeE80b3p2eEhmQks4MVd5NjVSVGFQMU9lTk1obHNVcUltNXR0bDJVbk1HNysyOUlTYmRSMmoyaWhMeGYwL282dnRZR3RqWkdJeU1VRXhHQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikc3b2dYOEw2OC9hcWR2QTBUdmVNZXJmSE0yRldPamdUSklRK2pxUDV4OHA2NnVINnpCVXRFMzFxU1dqdkY3RzBaVlUrM3hPREFuSmUrR0k2ZEFCT0J3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0MTAzOTM2Nzo4MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhd1JyOVhhYVJLSCtmZG9hVXMwUTNuaDVNSWlpSzZ4RFZpOGF1WWQyTXdUIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1NDYzNDIzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhUTSJ9"


module.exports = {

  menu: process.env.MENU || "v1", 

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.0",
  caption : global.caption || "cobra-м∂ 2024" , 
 
  author : process.env.PACK_AUTHER|| "cobra",
  packname: process.env.PACK_NAME || "cobra",
  botname : process.env.BOT_NAME  || "cobra-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "cobra",
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-26117e0e-c592-4ddc-95ae-20754d7e5614",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "cobra-er",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "main"  ).toUpperCase(),
};
global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";
global.rank = "updated" // Don't Touch
global.isMongodb = false; // Don't Touch Else Bot Won't Work
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
