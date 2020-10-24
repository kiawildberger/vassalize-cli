#!/usr/bin/env node

const clia = require("command-line-args")([
    {name:"token", alias: "t", type: String, multiple: false},
    {name:"script", alias: "s", type: String, multiple: false}
])
const vassalize = require("../lib/vassalize")
if(clia.token && clia.script) { vassalize.start(clia.token, clia.script) } else { console.log("token and script not provided") }
