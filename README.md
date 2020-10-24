## vassalize-cli
a command-line tool for quickly running discord bots from a script

a quick and fun cli for [vassalize](https://github.com/kiawildberger/vassalize)

---

### usage
`vassalize -t bot_token -s path_to_script_file`

the bot will start and use the provided script


### example script:

```javascript
exports.init = function(client) {
  // client is a standard discord.js client
}
exports.message = function(message) {
  // message is a standard discord.js message
}
```
