const net = require("net");
const client = require("./client");
const input = require("./input");


client.connect();
input.setupInput();




// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)