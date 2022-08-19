const express = require("express");
const app = express();
const Discord = require('discord.js');

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const tokens =["TOKENS","TOKENS"];


console.log('Total tokens',tokens.length);
let clients=[];

for(let i=0;i<tokens.length;i++){
  let client = new Discord.Client();
  clients.push(client);
}
for(let i=0;i<tokens.length;i++){

  clients[i].on('ready',async () => {
    console.log("Starting...");
    let Server = clients[i].guilds.get("SERVER ID"); 
    let Channel = Server.channels.get("CHANNELS ID");


    if(Channel.type === 'voice') 
    {
      Channel.join();
      setInterval(() => {
        if(Server.me.voiceChannel && Server.me.voiceChannelID !== Channel.id || !Server.me.voiceChannel)
        {
          Channel.join();
        } 
        
      }, 1);
    } else {
      console.log('Failed To Join The Channel')
    }
  });
  clients[i].login(tokens[i]);

}