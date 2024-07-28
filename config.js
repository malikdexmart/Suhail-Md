const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_24_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYzLFxuICAgICAgICA0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MixcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDg5LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICAzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMixcbiAgICAgICAgMjA5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjErNU5PZWVUTEFLRWZPZE9oVUdpV25pa3ZrNTFXcktNVCtKaFUwaUtTK0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1Njc4MjkyMTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRDUyRTEwOTVDQzVENTg4Mjc3NTExN0YyMTYwNkExQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIxOTQ2OTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWWd3U1QxaDVST0tUZlFOa1Itc3NKZ1wiLFxuICBcInBob25lSWRcIjogXCIzYWNkNGJiNi1mN2UwLTQyMWYtOGE1NC1hNzYzOTBjMDk0MmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgMTM3LFxuICAgICAgMTMxLFxuICAgICAgMTA2LFxuICAgICAgNTcsXG4gICAgICA2MyxcbiAgICAgIDI0OCxcbiAgICAgIDE1NyxcbiAgICAgIDEzMyxcbiAgICAgIDIwOCxcbiAgICAgIDIzLFxuICAgICAgNjMsXG4gICAgICAxNTQsXG4gICAgICAxMDksXG4gICAgICA0MCxcbiAgICAgIDI0MCxcbiAgICAgIDY0LFxuICAgICAgMTgzLFxuICAgICAgMTM3LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDIwMyxcbiAgICAgIDMwLFxuICAgICAgMTYwLFxuICAgICAgMTUyLFxuICAgICAgNjgsXG4gICAgICA1NSxcbiAgICAgIDk1LFxuICAgICAgMTAyLFxuICAgICAgOTMsXG4gICAgICAxODMsXG4gICAgICAxNTQsXG4gICAgICAyMzgsXG4gICAgICAxNzYsXG4gICAgICA5OCxcbiAgICAgIDE0OSxcbiAgICAgIDExMSxcbiAgICAgIDE3MSxcbiAgICAgIDIxOSxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhCR0daMlZNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2NzgyOTIxNTA6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NTI5OTI4MzUwOTMyNTo5N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5CH8J+FtfCfhbTwn4W48J+Fu/CfhbDwn4W9XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHZidmxvUStyV2F0UVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJck5QSDZndmZpWnBsRGFVWGs1TGZDbmZvV2JwNVJ6dzhFaFgrZEtaM1ZFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlkvOFp0c0pTZUMzYnZoQmFSVUZjS2J0UVExU1gxRWpTSkxGSy96QmFxY2VCcEFYRU1rbkxYU0haRnRRRWkrcXFuSEN2YWU2UDJ5YzUwRFFVNmNGd0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRROVhIeVVHUHg2bWFmTy9ldE8veGVReUdMOSt4Yi9oOFJCU2c3UHM4bDdva1hzRXE3WndvSzFEYjhHdkRPeE1sN3ZFUllVZjBzSkl3S3p2a2QyOUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY3ODI5MjE1MDo5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxOTQ2ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDTVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNNVS5qc29uIjogIntcImtleURhdGFcIjpcInhYand4dzRQNWRNK3VhZnUwWktCQUdDQnNJNnZDeVlJVlUzS1BRcWgxWVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg5NzcxMjU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxODYxMjYyNDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "feilan-desmart",
  ownername:process.env.OWNER_NAME|| "feilan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
