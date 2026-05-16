const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Tharusha-2008-maker/KING-THARU-/blob/main/images/Gemini_Generated_Image_ri8lk3ri8lk3ri8l.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*_Hello👋 THARU-MD Is Alive Now😍_*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
