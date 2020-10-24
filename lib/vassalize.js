const Discord = require("discord.js")
const path = require("path")

exports.start = function(token, script) {
    let client = new Discord.Client();
    let absolutepath = path.resolve(script)
    console.log(absolutepath)
    client.on("ready", () => {require(absolutepath).init(client)})
    client.on("message", msg => {require(absolutepath).message(msg)})
    client.login(token)
}