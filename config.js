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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255678292150";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT ySUHAIL_15_25_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDkwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg2LFxuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUyLFxuICAgICAgICA3MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc2LFxuICAgICAgICA0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU0LFxuICAgICAgICA5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDU3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDgxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYyLFxuICAgICAgICA4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDkwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTczLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFVlZ4VHliTWdHdTUyOUt0KzR1ZHl4aDNMTVNlb29mSVJyeSt5SlBpNGtNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY3ODI5MjE1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTU5N0UwNjEzRDlBOEI1NkQyMENBODNCRjZGOThFRTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NzI0Mjk1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlN6dTZuZk0tUU9hU2xLRUJSVnZsYXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTcyZDc0ZDktZWJjNS00OWQxLTk1MmEtNTA2YmMzNGE3YjlhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMjAxLFxuICAgICAgMjUwLFxuICAgICAgMjA2LFxuICAgICAgMTUxLFxuICAgICAgNzMsXG4gICAgICAxNDEsXG4gICAgICAxMzEsXG4gICAgICAyMjksXG4gICAgICA1MixcbiAgICAgIDU3LFxuICAgICAgMTg4LFxuICAgICAgMTc4LFxuICAgICAgMjM0LFxuICAgICAgMzUsXG4gICAgICA1NSxcbiAgICAgIDIwNSxcbiAgICAgIDkwLFxuICAgICAgMjAzLFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDQzLFxuICAgICAgMixcbiAgICAgIDE4MSxcbiAgICAgIDIwOCxcbiAgICAgIDIyNCxcbiAgICAgIDE2MixcbiAgICAgIDIxLFxuICAgICAgMjI5LFxuICAgICAgNDUsXG4gICAgICAyMTcsXG4gICAgICAxNjIsXG4gICAgICAxODksXG4gICAgICAxMjMsXG4gICAgICAxNzMsXG4gICAgICAyMTMsXG4gICAgICAyMjksXG4gICAgICA5MSxcbiAgICAgIDU3LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNRRFJLUE04XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2NzgyOTIxNTA6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NTI5OTI4MzUwOTMyNTo2MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5CH8J+FtfCfhbTwn4W48J+Fu/CfhbDwn4W9XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjNidmxvUXdNM0dzd1lZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJck5QSDZndmZpWnBsRGFVWGs1TGZDbmZvV2JwNVJ6dzhFaFgrZEtaM1ZFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm96TFFjaHZ1Q1VHUlZDT0ptZTNmdGdlVXVkcVhlSGZNenB4VzdHQk8yY0M1V2RaUXJjWFVNQmNDMjdLbnFDSFJja3V3dGdGRG1QR1N0U1prcFV0akNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInppQWhhdjRmSnNhYS9leEpXWnFyblkzbUZ4WWNTOFdWSDBvYlVYKzNnWWRic21sMHcvNitOQm4wTFJoc25OUTFrcHNwamIreUZMbExuSlhjM25QSkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY3ODI5MjE1MDo2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3MjQyOTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGbTlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZtOS5qc29uIjogIntcImtleURhdGFcIjpcIlg3NEFoMndoWjloSlBDS0l3U3dyWmZyVFhaaHNLNkZaUCszSmZYTzBzclU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg5NzcxMjI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg3MjQwMjk2MzRcIn0iCn0=our SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "feilan",
  packname: process.env.PACK_NAME || "jesicol",
  botname : process.env.BOT_NAME  || "feilani",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
