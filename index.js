const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const tokens =[//DIR tokens hna entre 'TOKEN','TOKEN'
];


console.log('Total tokens',tokens.length);
let clients=[];

for(let i=0;i<tokens.length;i++){
  let client = new Discord.Client();
  clients.push(client);
}
for(let i=0;i<tokens.length;i++){

  clients[i].on('ready',async () => {
    console.log("Starting..");
    let g = clients[i].guilds.get(//id server entre "ID SERVER"); 
    let c = g.channels.get(//id channel entre "ID CHANNEL");
    if(c.type === 'voice') {
      c.join();
      setInterval(() => {
        if(g.me.voiceChannel && g.me.voiceChannelID !== c.id || !g.me.voiceChannel) c.join();
      }, 1);
    } else {
      console.log('Failed To Join: \n The Channel Type isn "Listening."')
    }
  });
  clients[i].login(tokens[i]);

}