/**
* @author 𓅋 ⃝« ❰ 𝑴𝑨𝑹𝑰𝑵𝑨𝐱͜͡⃝ᴆ
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
	name: "bot-say",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "𓅋 ⃝« ❰ 𝑴𝑨𝑹𝑰𝑵𝑨𝐱͜͡⃝ᴆ",
	description: "Bot Saying",
	commandCategory: "ai",
	usages: "[text/message/chat]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
	if (!say) api.sendMessage("Aby lody jo bat bot sa karwana chata hai phela wo to likh                *★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𓅋 ⃝« ❰ 𝑴𝑨𝑹𝑰𝑵𝑨𝐱͜͡⃝ᴆ ", event.threadID, event.messageID)
	else api.sendMessage(`${say}`, event.threadID, event.messageID);
}
