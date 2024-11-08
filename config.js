const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349053080211";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_41_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDMxLFxuICAgICAgICA1LFxuICAgICAgICAxODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI4LFxuICAgICAgICA4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxODksXG4gICAgICAgIDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDMwLFxuICAgICAgICAyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgOTEsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjExLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDgyLFxuICAgICAgICA3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOWpaaTIraTRaZWZlaGEzSTZNZ010bEZJbDM3bkNyV0wxMkJDQWxQWVRDRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib3k4c1E4cDNSV1c2UjlrY0hXOTlWd1wiLFxuICBcInBob25lSWRcIjogXCJjOWY0MzZmMS1lZWMwLTQ1M2MtODBlNi01NWYxZWEwODkzNDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxNTEsXG4gICAgICAxOTYsXG4gICAgICAyNTEsXG4gICAgICAyMjIsXG4gICAgICAzMSxcbiAgICAgIDY3LFxuICAgICAgMTQ4LFxuICAgICAgMjUsXG4gICAgICAxNDAsXG4gICAgICAxODgsXG4gICAgICAxNTUsXG4gICAgICAyMjYsXG4gICAgICAxNzgsXG4gICAgICAxMDMsXG4gICAgICA5OSxcbiAgICAgIDE3MyxcbiAgICAgIDU2LFxuICAgICAgMTQyLFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAxNTQsXG4gICAgICAyMzQsXG4gICAgICAyMjIsXG4gICAgICA5MCxcbiAgICAgIDE1NSxcbiAgICAgIDE4NCxcbiAgICAgIDE3MyxcbiAgICAgIDE5MixcbiAgICAgIDY4LFxuICAgICAgMTUyLFxuICAgICAgMTM2LFxuICAgICAgMjIwLFxuICAgICAgMTcyLFxuICAgICAgMTYwLFxuICAgICAgOTgsXG4gICAgICAyMzcsXG4gICAgICAxNDksXG4gICAgICAyNDgsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEJSSEZFRUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTMwODAyMTE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDQzNTA3NzQ5MDEwOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BMN2xxMEhFT0twdUxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUVqNGFQMkNzMXdnTTBCcWdMcUVoVjFLZjFIM3lIc2RrU2RRejVMMlp6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNYkM2MHNmU1hmOTIvSHJQa3p5MUlBTUY3aFprWGhkQmNjUlZtNmtmS29ER2JaeVRZWG9ncUpFUnFLc3ZibmE4MTZEQ3BSbDQ2ekZWMkQ5K01qWm9BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFa014QlNkZHpkMFptYXRkWDZPb2syNXRMTDl3N3I5QUcrblF1R2E5NnRCdVdFRVZWQVlGSW9BZmJMVGN1SVJOUG5CeE5NZDgyQk1lTmJYQm1OZ0JDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUzMDgwMjExOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDczMjU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTStYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNK1guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0bk9zUzI4OExQZVozMlZKSWRBTDhPcS9TYXNMemFUd3NsdlpQcUUwcGJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NzM3OTYzMzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Sunday-fx",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
