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



  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {
  connect,

};

