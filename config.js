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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b52448799b6f9faf7dceb.jpg" ;
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


global.SESSION_ID = process.env.SESSION_ID ||  "Astro;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV01BcDUyWXU3VTQ3KzJIaVdTZ2ZYNEJ1NmVPcHFjbWxPS295VWxTd0EyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzY1RExrcURoM2xMQW5KUDE5cjRSMHdFSE02OVdGQzl1R1VRTkpUbExBMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Tmk2RHRQaHUrUDZzUmgxYzZmUjJ5YU1sMi9SMVpkNTl1MmwycC9ONlhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZNXhqZUdPRUtQWldCVFZhYlpBcEFhTlMwL2p3Yk1IZ0lJUm1xZERSNkVNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFMQkZLKzN1Sy8vSW5YcEJkRDB1UGxxM3VwOFMxd1ZZWElPUVoycVpUM3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVyak5PUXFaL00vK0c5Tmk1TUVvSmh2bzNIOHBUeGZhbEd6MmlhTndDMDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xzcHh4ZGpGSzUxQTFGQkpuN3dHR0VnMk1UU29qK1cwck91Z1FPUFVXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmU2ZndlQWtyZDJmZXFINDdadDFVdEJiUXgyZWRmTXV3ZkxnekJHQ0V6WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZOVVR1T25LVjJaU1hQNmlsaUYrVUZBTnp0aEdTcGcrQzdVem9kNlNVcjhPbmpFRVQ4MENGVHZWYkVSdWJ5R0hkZXZ5YkNEQjJIWjhkVUJPTnphZkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgzLCJhZHZTZWNyZXRLZXkiOiJwa1JMWVNuK1hwQmkrZ3Zsa2IyazdZNFhTZldVUlRNOVREQjJVb3dPYTFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1d1VxTkphQ1R3V0NjUXZEWVBZTWZBIiwicGhvbmVJZCI6IjBjNzZkZWZjLTIxZmItNDZmMS04NjY1LWY2ZmFkZDVjMzM1OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXYlJaYjhBMVA3bVBDeDBBSytrS3dESUpEb1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1hScVlGWk5YQ25BcDZMbm42L080c255VnFBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNBWU1NMk02IiwibWUiOnsiaWQiOiIyMzQ3MDQxMDM5MzY3OjkxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImNvYnJhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMSERrcjRIRU9MU3pySUdHQk1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyQkd2MWRwcEVvZjU5MmhwU3pSRGVlSGt3aUtJcnJFTldMeHE1aDNZekJNPSIsImFjY291bnRTaWduYXR1cmUiOiJ4NDQ5WTkrTllWbEI0b3FBZkRIVDRIa3ZqMnBZemZTWGx4b1dUMFB6K0VEV01INGc2NmF1VXV2YW9INXMzSElJc2U4bFNtN0c2dFE3Q1lqMHFLb0hBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU0JlbDZCZ0FLOWMwSkpvQlNoYWZaeGZPNHZIT3VKWDdJU3ZBWDBtaURYaDdNLzJPUWJiV3MwS05oeXdqenZkSVh6bUhYUFVHK2ptbG5zTzRmbWJDQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQxMDM5MzY3OjkxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmF3UnI5WGFhUktIK2Zkb2FVczBRM25oNU1JaWlLNnhEVmk4YXVZZDJNd1QifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTY3NTg4OTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSFRNIn0="
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
