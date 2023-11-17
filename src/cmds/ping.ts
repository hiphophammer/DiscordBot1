import { Client } from "discord.js";

exports.run = (client: Client, msg: String, args) => {
    msg.reply(`${client.ws.ping}ms`);
};

exports = {
    name: 'ping'
};