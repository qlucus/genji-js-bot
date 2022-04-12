const client = require("../index");

client.on("ready", () =>
    client.user.setActivity("NetCloud", { type: "WATCHING" }),
    console.log(`${client.user.tag} is up and ready to go!`)
);
