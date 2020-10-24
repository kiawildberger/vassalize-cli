exports.init = function(client) {
    console.log(client.user.username)
}

exports.message = function(msg) {
    msg.channel.send("sample script")
}