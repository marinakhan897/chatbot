/**
* @author Zeeshan Altaf
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
	name: "bio",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𓅋 ⃝« ❰ 𝑴𝑨𝑹𝑰𝑵𝑨𝐱͜͡⃝ᴆ",
	description: "Change bot's bio",
	commandCategory: "admin",
	usages: "bio [text]",
  cooldowns: 5
  
}
  
  module.exports.run = async ({ api, event, global, args, permssion, utils, client, Users }) => {
    api.changeBio(args.join(" "), (e) => {
      if(e) api.sendMessage("Bero cmnd Theak Likh                    *★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  𓅋 ⃝« ❰ 𝑴𝑨𝑹𝑰𝑵𝑨𝐱͜͡⃝ᴆ" + e, event.threadID); return api.sendMessage("Jani ap ka new bio hai \n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
  }