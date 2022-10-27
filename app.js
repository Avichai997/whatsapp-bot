const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.initialize();

client.on("authenticated", () => {
  console.log("AUTHENTICATED");
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  //   console.log("message received!", message);
  if (message.body.toLocaleLowerCase() === "שלום") {
    console.log("reply send!");
    message.reply("גם לך אדוני");
  }
});
