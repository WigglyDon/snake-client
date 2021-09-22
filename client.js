const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connected to server");
    conn.write("Name: LOL");
  });
//----------------------------------------

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)


  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {
  connect,

};

