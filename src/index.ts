import { Client } from "discord.js";
require("dotenv").config();

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.login(process.env.CLIENT_TOKEN);